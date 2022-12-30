import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {OpenRpcModule} from './openrpc/doc/openrpc.module';
import {makeOpenRpcDocument} from './openrpc-document.maker'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const openrpcDocument = await makeOpenRpcDocument(app);
  await OpenRpcModule.setup('/doc',app, openrpcDocument);
  await app.listen(3000);
}
bootstrap();
