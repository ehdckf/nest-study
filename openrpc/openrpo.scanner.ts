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
import { OpenRpcModule } from './openrpc.module';
import { OpenrpcDocument } from './interfaces';
import { OpenRpcExplorer } from './openrpc.explorer';
import {OpenRpcTransformer} from './openrpc.transformer'

export class OpenRpcScanner {
        private readonly transformer = new OpenRpcTransformer();
        private readonly explorer = new OpenRpcExplorer();
        private readonly modelPropertiesAccessor = new ModelPropertiesAccessor();
        private readonly swaggerTypesMapper = new SwaggerTypesMapper();
        private readonly schemaObjectFactory = new SchemaObjectFactory(
          this.modelPropertiesAccessor,
          this.swaggerTypesMapper,
        );
        scanApplication(app:INestApplicationContext, options:any) {
            const {
              deepScanRoutes,
              include:includeModules = [],
              extraModels = [],
              ignoreGlobalPrefix = false,
              operationIdFactory
            } = options;

              const container:NestContainer  = (app as any).container;
              const modules: Module[] = this.getModules(
                      container.getModules(),
                      includeModules,
                ) 

              const globalPrefix = !ignoreGlobalPrefix
                ? stripLastSlash(this.getGlobalPrefix(app))
                : ""; 

                const demormalizedMethods = modules.reduce(
                    (methods, {components, metatype, relatedModules, routes}) => {
                      let allComponents = new Map([...components, ...routes]);
                      if(false){} //deepScanRoutes

                      const path = metatype
                        ? Reflect.getMetadata(MODULE_PATH, metatype)
                        : undefined;

                        return [
                          ...methods,
                          ...this.scanModuleComponents(
                              allComponents,
                              path,
                              globalPrefix,
                              operationIdFactory,
                            )
                        
                        ]
                    }
                  )
              console.log(modules)
        }       

        private getModules(
            modulesContainer:Map<string,Module>,
            include:Function[],
          ):Module[]{
            if(!include || isEmpty(include)) {
              return [...modulesContainer.values()];
            }
            return [...modulesContainer.values()].filter(({metatype}) => 
              include.some( item=> item === metatype)
            );
          }

        private getGlobalPrefix(app:INestApplicationContext): string {
          const internalConfigRef = (app as any).config;
          return (internalConfigRef && internalConfigRef.getGlobalPrefix() || '');
        }

        private scanModuleComponents(
            components:Map<InstanceToken,InstanceWrapper<Injectable>>,
            modulePath?:string,
            globalPrefix?: string,
            operationIdFactory?:(controllerKey:string, methodKey:string) => string,
          ){
            const denormalizedArray = [...components.values()].reduce(
                (denormalized, comp) => {
                  const object = this.explorer.explorerOpenRpcServices(
                      comp,
                      modulePath,
                      globalPrefix,
                      operationIdFactory
                    )
                    return [...denormalized,...object]
                },
                []
              )
          }

}