// import {
//   RpcId,
//   RpcPayload,
//   RpcVersion,
//   RpcMethod,
//   RpcMethodHandler,
//   RpcHandler,
// } from '../jsonrpc/context/decorators';

import { CatId, Cat } from './cat.dto';
import { OpenRpcHandler } from 'src/myapi/decorators';
import { OpenRpcMethod } from 'src/myapi/decorators';

// import { RpcHandler } from '../../docs/decorators/rpc-handler.decorator';

@OpenRpcHandler({
  method: 'pet',
})

export class CatHandler {

  @OpenRpcMethod({method:'get'})
  public get(
  ): Cat {
    const pet: Cat = {
      id: 1,
      name: 'kitty',
    };
    return pet;
  }

  @OpenRpcMethod({method:'kill'})
  public kill(
  ): string {
    const pet: Cat = {
      id: 1,
      name: 'kitty',
    };
    return 'Meow';
  }

  //   @RpcMethodHandler('delete')
  //   public async delete(
  //     @RpcPayload() payload: Payload,
  //     @RpcVersion() version: string,
  //     @RpcId() id: number | string,
  //     @RpcMethod() method: string,
  //   ) {
  //     return payload;
  //   }
}
