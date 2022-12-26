// import {
//   RpcId,
//   RpcPayload,
//   RpcVersion,
//   RpcMethod,
//   RpcMethodHandler,
//   RpcHandler,
// } from '../jsonrpc/context/decorators';

import {DogId,Dog } from './dog.dto';
import { OpenRpcHandler } from 'src/openrpc/decorators';
import { OpenRpcMethod } from 'src/openrpc/decorators';
import { getDogNameExample } from './dog.example';

// import { RpcHandler } from '../../docs/decorators/rpc-handler.decorator';

@OpenRpcHandler({
  handler: 'dog',
})

export class DogHandler {

  @OpenRpcMethod({
    name:'get',
    description:"get Dog name",
    params: DogId,
    result: Dog,
    examples:[getDogNameExample]
  })
  public get(
  ): Dog {
    const pet: Dog = {
      id: {id:1},
      name: 'Marley',
    };
    return pet;
  }

  @OpenRpcMethod({name:'kill'})
  public kill(): string {
    
    return 'Woof';
  }


  @OpenRpcMethod({
    name:'get_list',
    description:"get Dog name",
    
    result: Dog,
    examples:[getDogNameExample]
  })
  public getList(){
  
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
