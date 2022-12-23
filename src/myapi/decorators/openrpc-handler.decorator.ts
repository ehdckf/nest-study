import { createMixedDecorator } from "@nestjs/swagger/dist/decorators/helpers";
import { DECORATORS } from "../constant";

export interface OpenRpcHandlerOption {
        method: string;
}

export function OpenRpcHandler(option: OpenRpcHandlerOption){
        return createMixedDecorator(DECORATORS.OPENRPC_HANDLER,option);
}

