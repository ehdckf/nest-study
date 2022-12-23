import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatHandler } from './cat/cat.handler';
// import { JsonRpcModule } from './jsonrpc/index';

@Module({
  imports: [
    // JsonRpcModule.forRoot({
    //   path: '/rpc',
    // }),
  ],
  controllers: [],
  providers: [CatHandler],
})
export class AppModule {}
