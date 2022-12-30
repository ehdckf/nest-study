import { INestApplicationContext, Type } from '@nestjs/common';
import { MODULE_PATH } from '@nestjs/common/constants';
import { Injectable } from '@nestjs/common/interfaces';
import { NestContainer } from '@nestjs/core/injector/container';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { InstanceToken, Module } from '@nestjs/core/injector/module';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { ModelPropertiesAccessor } from '@nestjs/swagger/dist/services/model-properties-accessor';
import { SchemaObjectFactory } from '@nestjs/swagger/dist/services/schema-object-factory';
import { SwaggerTypesMapper } from '@nestjs/swagger/dist/services/swagger-types-mapper';
import { stripLastSlash } from '@nestjs/swagger/dist/utils/strip-last-slash.util';
import { flatten, isEmpty } from 'lodash';
import { OpenRpcExplorer } from './openrpc.explorer';
import { OpenrpcDocument } from './interfaces/openrpc-common.interfaces';
import { OpenRpcTransformer } from './openrpc.transformer';
import { DenormalizedDoc } from './interfaces/denormalized-doc.interface';
import { SwaggerDocumentOptions } from '@nestjs/swagger';

export interface OpenrpcDocumentOptions extends SwaggerDocumentOptions {}

export class OpenRpcScanner {
        private readonly transformer = new OpenRpcExplorer();
        private readonly explorer = new OpenRpcExplorer();
        private readonly modelPropertyAccessor = new ModelPropertiesAccessor();
        private readonly swaggerTypeMapper = new SwaggerTypesMapper();
        private readonly schemaObjectFactory = new SchemaObjectFactory(
                this.modelPropertyAccessor,
                this.swaggerTypeMapper
        )

        public scanApplication(
                app: INestApplicationContext,
                options: OpenrpcDocumentOptions,
        ): Omit<OpenrpcDocument, "openrpc"| "info"> {
                const {
                        deepScanRoutes,
                        include:includedModules = [],
                        extraModels = [],
                        ignoreGlobalPrefix = false,
                } = options

                const container: NestContainer = (app as any).container;
                const modules: Module[] = [...container.getModules().values()];

                const globalPrefix = stripLastSlash(this.getGlobalPrefix(app))

                const denormalizedHandlers = modules.reduce(
                        (handlers, { components, metatype, relatedModules, routes }) => {
                                let allComponents = new Map([...components, ...routes]);

                                const path = metatype
                                        ? Reflect.getMetadata(MODULE_PATH, metatype)
                                        : undefined;

                                return [
                                        ...handlers,
                                        ...this.scanModuleComponents(
                                                allComponents,
                                                path,
                                                globalPrefix,
                                        )

                                ]

                        }, []
                );

                const schemas = this.explorer.getSchemas();
                this.addExtraModels(schemas, extraModels);
                return {
                        methods:[...denormalizedHandlers],
                        components: {schemas}
                }
        }

        private getGlobalPrefix(app: INestApplicationContext): string {
                const internalConfigRef = (app as any).config;
                return (internalConfigRef && internalConfigRef.getGlobalPrefix()) || '';
        }

        private scanModuleComponents(
                components: Map<InstanceToken, InstanceWrapper<Injectable>>,
                modulePath?: string,
                globalPrefix?: string,
        ) {
                const denormalizedArray = [...components.values()].reduce(
                        (denormalized, comp) => {
                                const object = this.explorer.explorerOpenRpcService(
                                        comp,
                                        modulePath,
                                        globalPrefix,
                                );
                                return [...denormalized, ...object];
                        }, []
                )

                return denormalizedArray

        }

        private addExtraModels(
                schemas: Record<string, SchemaObject>,
                extraModels: Function[],
        ) {
                extraModels.forEach((item) => {
                        this.schemaObjectFactory.exploreModelSchema(item, schemas);
                });
        }
}