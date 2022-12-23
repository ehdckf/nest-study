import {Type} from '@nestjs/common';
import { DECORATORS } from '../../myapi/constant';

export const explorerOpenRpcMethodMetadata = (metatype:Type<unknown>) => {
        console.log(Reflect.getMetadata(DECORATORS.OPENRPC_HANDLER,metatype))
        return Reflect.getMetadata(DECORATORS.OPENRPC_HANDLER,metatype);
}