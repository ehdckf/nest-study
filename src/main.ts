import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {OpenRpcModule} from './openrpc/openrpc.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  OpenRpcModule.createDocument(app);
  
  await app.listen(3000);
}
bootstrap();
