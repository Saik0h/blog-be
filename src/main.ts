import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AccessGuard } from './common/guards/access.guard';
import * as cookieParser from 'cookie-parser';
import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
     const reflector = app.get(Reflector);
  const jwtService = app.get(JwtService);

  app.useGlobalGuards(new AccessGuard(reflector, jwtService));
   app.enableCors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:4200',
   credentials: true});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
