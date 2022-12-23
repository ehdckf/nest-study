import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import {OpenRpcModule} from './openrpc/openrpc.module';
import {MyApiModule} from './myapi/myapi.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await OpenRpcModule.createDocument(app)
  // TempModule.createDocument(app);
  const temp =new MyApiModule();
  temp.test(app);
  await app.listen(3000);
}
bootstrap();
