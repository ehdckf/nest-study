// import {
//   RpcId,
//   RpcPayload,
//   RpcVersion,
//   RpcMethod,
//   RpcMethodHandler,
//   RpcHandler,
// } from '../jsonrpc/context/decorators';

import { CatId, Cat } from './cat.dto';
import { OpenRpcHandler } from 'src/openrpc/decorators';
import { OpenRpcMethod } from 'src/openrpc/decorators';

// import { RpcHandler } from '../../docs/decorators/rpc-handler.decorator';

@OpenRpcHandler({
  handler: 'cat',
})

export class CatHandler {

  @OpenRpcMethod({name:'get'})
  public get(
  ): Cat {
    const pet: Cat = {
      id: 1,
      name: 'kitty',
    };
    return pet;
  }

  @OpenRpcMethod({name:'kill'})
  public kill(
  ): string {
    const pet: Cat = {
      id: 1,
      name: 'kitty',
    };
    return 'Meow';
  }
}
