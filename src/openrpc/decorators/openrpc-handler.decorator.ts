import {createMixedDecorator} from '@nestjs/swagger/dist/decorators/helpers';
import { DECORATORS } from '../constants';

export interface OpenRpcHandlerOptions{
        handler: string;
        description?: string;
}

export function OpenRpcHandler(options?:OpenRpcHandlerOptions){
        return createMixedDecorator(DECORATORS.OPENRPC_HANDLER, options);
}