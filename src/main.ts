import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const port: string = '3000';
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
