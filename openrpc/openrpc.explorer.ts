import { Type } from "@nestjs/common";
import { InstanceWrapper } from "@nestjs/core/injector/instance-wrapper";
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { MetadataScanner } from '@nestjs/core';
import { flatten } from 'lodash';
import { DECORATORS } from "../myapi/constant";
import {
        explorerOpenRpcHandlerMetadata,
        explorerOpenRpcMethodMetadata
} from './explorer'
import { DenormalizedDoc } from "./interfaces/denormalized-doc.interface";

export class OpenRpcExplorer {
        private readonly metadataScanner = new MetadataScanner();
        private readonly schemas: SchemaObject[] = [];
        private readonly schemaRefsStack: string[] = [];

        private operationIdFactory = (controllerKey: string, methodKey: string) =>
                controllerKey ? `${controllerKey}_${methodKey}` : methodKey;

        public explorerOpenRpcServices(
                wrapper: InstanceWrapper<any>,
                modulePath?: string,
                globalPrefix?: string,
                operationIdFactory?: (controllerKey: string, methodKey: string) => string,
        ) {
                if (operationIdFactory) {
                        this.operationIdFactory = operationIdFactory;
                }

                const { instance, metatype } = wrapper;
                if (
                        !instance ||
                        !metatype ||
                        !Reflect.getMetadataKeys(metatype).find(
                                (x) => x === DECORATORS.OPENRPC_HANDLER
                        )
                ) {
                        return [];
                }

                const prototype = Object.getPrototypeOf(instance);
                const documentResolvers = {
                        handler:[explorerOpenRpcHandlerMetadata],
                        methods:[explorerOpenRpcMethodMetadata]
                }

                return this.genarateDenormalizedDocument(
                        metatype as Type<unknown>,
                        prototype,
                        instance,
                        documentResolvers,
                        modulePath,
                        globalPrefix
                        )

        }

        private genarateDenormalizedDocument(
                metatype: Type<unknown>, 
                prototype: Type<unknown>,
                instance: object,
                documentResolvers:any,
                _modulePath?: string,
                _globalPrefix?: string,
                ){
                        const denormalizedOpenRpcServices = this.metadataScanner.scanFromPrototype<
                                any, 
                                DenormalizedDoc[]
                                >(
                                        instance, prototype, (name)=>{
                                                const targetCallback = prototype[name];
                                                const methodData = documentResolvers.root.reduce((_metadata,fn)=>{
                                                        const serviceMetatdata = fn(metatype);

                                                        const handlers = documentResolvers.handler.reduce(
                                                                (handler, explorerOpenRpcHandlerMetadata)=>{
                                                                        const meta = explorerOpenRpcHandlerMetadata(
                                                                                this.schemas,
                                                                                instance,
                                                                                prototype,
                                                                                targetCallback,
                                                                                );
                                                                        if(!meta) return handler
                                                                                
                                                                        meta.forEach(op=>{
                                                                                if(handlers.hasOwnProperty(op.handler)){
                                                                                        handlers[op.handler] = {...handlers[op.handler],...op};
                                                                                }else{
                                                                                        handlers[op.handler] = op;
                                                                                }
                                                                        })

                                                                        return handlers;
                                                                },{}
                                                                );
                                                        return Object.keys(handlers).map((handler)=>({
                                                                root:{...serviceMetatdata,name:handler},
                                                                methods:handler[handler],
                                                        }))
                                                },[]);
                                                return methodData
                                        }
                                
                                );
                                return flatten(denormalizedOpenRpcServices)
                
                
                }



}