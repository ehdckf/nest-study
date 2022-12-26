import { Type } from '@nestjs/common';
import { MetadataScanner } from '@nestjs/core';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { flatten } from 'lodash';

import {
        explorerOpenRpcHandlerMetadata,
        explorerOpenRpcMethodMetadata
} from './explorers'
import { DenormalizedDoc } from './interfaces'
import { DECORATORS } from './constant'


export class MyapiExplorer {
        private readonly metadataScanner = new MetadataScanner();
        private readonly schemas: SchemaObject[] = [];
        private readonly chemaRefStack: string[] = [];
        private operationIdFactory = (handlerKey: string, methodKey: string) =>
                handlerKey ? `${handlerKey}.${methodKey}` : methodKey;

        public explorerMyApiServices(
                wrapper: InstanceWrapper<any>,
                modulePath?: string,
                globalPrefix?: string,
                operationIdFactory?: (handlerKey: string, methodKey: string) => string,
        ) {
                if (operationIdFactory) {
                        this.operationIdFactory = operationIdFactory;
                }

                const { instance, metatype } = wrapper;
                if (
                        !instance ||
                        !metatype ||
                        !Reflect.getMetadataKeys(metatype).find(
                                x => x == DECORATORS.OPENRPC_HANDLER,
                        )
                ) {
                        return []
                }
                const prototype = Object.getPrototypeOf(instance);
                const documentResolvers = {
                        root: explorerOpenRpcHandlerMetadata,
                        method: explorerOpenRpcMethodMetadata,
                }

                return this.generateDenormalizedDocument(
                                metatype as Type<unknown>,
                                prototype,
                                instance,
                                documentResolvers,
                                modulePath,
                                globalPrefix,
                        )

        }

        private generateDenormalizedDocument(
                        metatype:Type<unknown>,
                        prototype:Type<unknown>,
                        instance: object,
                        documentResolvers,
                        _modulePath?: string,
                        _globalPrefix?: string,
                ){
                        
                        const denormalizedMyapiServices = this.metadataScanner.scanFromPrototype<
                        any,
                        DenormalizedDoc[]
                      >(instance, prototype, (name)=>{
                                const targetCallback = prototype[name];
                                const handlerFinder = documentResolvers.root;
                                const handlerMetadata  =  handlerFinder(metatype);

                                const methodFinder = documentResolvers.method
                                const meta = methodFinder(this.schemas, instance, prototype, targetCallback);
                                meta.method =  `${handlerMetadata.handler}.${meta.method}`
                                return meta
                        })
                        return denormalizedMyapiServices;
                }


}