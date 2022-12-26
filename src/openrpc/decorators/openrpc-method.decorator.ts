import {Type} from '@nestjs/common';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import {createMixedDecorator} from '@nestjs/swagger/dist/decorators/helpers';
import { DECORATORS } from '../constants';
import { MethodObject } from '../interfaces';

export interface OpenRpcMethodOptions{
        name: string;
        description?: string;
        params?:Function;
        result?:Function;
        examples?:any[];
}


export function OpenRpcMethod(
        options: OpenRpcMethodOptions 
        ): MethodDecorator & ClassDecorator{
                return createMixedDecorator(DECORATORS.OPENRPC_METHOD,options)
        }
