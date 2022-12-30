import {Type} from '@nestjs/common';
import { DECORATORS } from '../../constants';

export const exploreOpenRpcHandlerMatadata = (metatype: Type<unknown>) => {
        return Reflect.getMetadata(DECORATORS.OPENRPC_HANDLER,metatype);
}