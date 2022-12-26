import {Type} from '@nestjs/common';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { DECORATORS } from '../constants';
import { MethodObjectFactory } from '../services/method-object.factory';

const methodObjectFactory = new MethodObjectFactory();

export const exploreOpenRpcMethodMetadata = (
        schemas: Record<string, SchemaObject>,
        instance: object,
        prototype: object,
        method: object,
        )=>{
                const metadata = Reflect.getMetadata(DECORATORS.OPENRPC_METHOD, method);
                

                return methodObjectFactory.create(metadata, ['application/json'],schemas);
        }