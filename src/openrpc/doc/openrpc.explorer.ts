import { Type } from '@nestjs/common';
import { MetadataScanner } from '@nestjs/core';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { flatten } from 'lodash';
import { DenormalizedDoc, DenormalizedDocResolvers } from './interfaces';
import { DECORATORS } from '../constants';
import {
        exploreOpenRpcHandlerMatadata,
        exploreOpenRpcMethodMetadata
} from './explorers'

export class OpenRpcExplorer {
        private readonly metadataScanner = new MetadataScanner();
        private readonly schemas: SchemaObject[] = [];
        private readonly schemaRefsStack: string[] = [];


        public explorerOpenRpcService(
                wrapper: InstanceWrapper<any>,
                modulePath?: string,
                globalPrefix?: string,
        ) {
                const { instance, metatype } = wrapper;
                if (
                        !instance ||
                        !metatype ||
                        !Reflect.getMetadataKeys(metatype).find(
                                (x) => x == DECORATORS.OPENRPC_HANDLER
                        )
                ) {
                        return [];
                }

                const prototype = Object.getPrototypeOf(instance);
                const documentResolvers: DenormalizedDocResolvers = {
                        root: exploreOpenRpcHandlerMatadata,
                        methods: exploreOpenRpcMethodMetadata
                }

                return this.generateDenormalizedDocument(
                                metatype as Type <unknown>,
                                prototype,
                                instance,
                                documentResolvers,
                                modulePath,
                                globalPrefix
                        );
        }

        public getSchemas(): Record<string, SchemaObject> {
                const ret = {...this.schemas} as unknown as Record<string, SchemaObject>;
                return ret;
        }

        private generateDenormalizedDocument(
                metatype : Type<unknown>,
                prototype: Type<unknown>,
                instance: object,
                documentResolvers: DenormalizedDocResolvers,
                _modulePath?: string,
                _globalPrefix?: string,
                ): DenormalizedDoc[] {
                        
                        const denormalizedOpenRpcServices = this.metadataScanner.scanFromPrototype<any, DenormalizedDoc>(
                                instance, prototype, (name)=>{
                                const targetCallback = prototype[name];
                                const handlerResolver = documentResolvers.root;
                                const handlerMetadata = handlerResolver(metatype);
                                const methodResolver = documentResolvers.methods
                                const methodMetadata = methodResolver(
                                                this.schemas,
                                                instance, 
                                                prototype,
                                                targetCallback,
                                        );
                                methodMetadata.name = `${handlerMetadata.handler}.${methodMetadata.name}`        
                                if(methodMetadata.params){
                                        const {params} = methodMetadata;
                                }
                                return methodMetadata
                        })
                        // console.log(denormalizedOpenRpcServices)
                        return denormalizedOpenRpcServices
                }
}