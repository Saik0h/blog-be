import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:4200',
    credentials: true
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
