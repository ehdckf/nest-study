import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PetHandler } from './pet/pet.handler';
import { JsonRpcModule } from './jsonrpc/index';
@Module({
  imports: [
    JsonRpcModule.forRoot({
      path: '/rpc',
    }),
  ],
  controllers: [],
  providers: [PetHandler],
})
export class AppModule {}
