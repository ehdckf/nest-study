import {Type} from '@nestjs/common';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { DECORATORS } from '../../myapi/constant';

export const explorerOpenRpcMethodMetadata = (
        schemas:Record<string, SchemaObject>,
        _instance: object,
        _prototype: Type<unknown>,
        method:object,
        ) => { 
                const metadata = Reflect.getMetadata(DECORATORS.OPENRPC_METHOD, method)
                if(!metadata){
                        return;
                }
                return metadata;
}