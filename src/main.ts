import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MyAPI} from './myapi/myapi.module'; 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TempModule.createDocument(app);
  await app.listen(3000);
}
bootstrap();
