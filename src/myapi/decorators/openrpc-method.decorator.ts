import {Type} from '@nestjs/common';
import { createMixedDecorator } from '@nestjs/swagger/dist/decorators/helpers';
import { OpenrpcDocument, MethodObject } from '../interfaces';
import { DECORATORS } from '../constant';

export interface OpenRpcMethodOptions extends Partial<MethodObject> {
        method: string;
}

export function OpenRpcMethod(
        options: OpenRpcMethodOptions
        ): MethodDecorator & ClassDecorator{
                return createMixedDecorator(DECORATORS.OPENRPC_HANDLER,options)
        }

