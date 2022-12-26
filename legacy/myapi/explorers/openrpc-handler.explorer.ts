import {Type} from '@nestjs/common';
import { DECORATORS } from '../../myapi/constant';

export const explorerOpenRpcHandlerMetadata = (metatype:Type<unknown>) => {
        return Reflect.getMetadata(DECORATORS.OPENRPC_HANDLER,metatype);
}