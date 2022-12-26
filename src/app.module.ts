import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatHandler } from './cat/cat.handler';
import { DogHandler } from './dog/dog.handler';
// import { JsonRpcModule } from './jsonrpc/index';

@Module({
  imports: [
    // JsonRpcModule.forRoot({
    //   path: '/rpc',
    // }),
  ],
  controllers: [],
  providers: [CatHandler,DogHandler],
})
export class AppModule {}
