// import {
//   RpcId,
//   RpcPayload,
//   RpcVersion,
//   RpcMethod,
//   RpcMethodHandler,
//   RpcHandler,
// } from '../jsonrpc/context/decorators';
// import { PetId, Pet } from './pet.dto';

// // import { RpcHandler } from '../../docs/decorators/rpc-handler.decorator';

// @RpcHandler({
//   method: 'pet',
// })
// export class PetHandler {
//   @RpcMethodHandler('get')
//   public async get(
//     @RpcPayload() payload: PetId,
//     @RpcVersion() version: string,
//     @RpcId() id: number | string,
//     @RpcMethod() method: string,
//   ): Promise<Pet> {
//     const pet: Pet = {
//       id: id,
//       name: 'kitty',
//     };
//     return pet;
//   }

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
