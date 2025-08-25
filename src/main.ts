import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { BasicInterceptor } from './modules/e3/interceptor/basic.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  // Registra el interceptor de forma GLOBAL
  app.useGlobalInterceptors(new BasicInterceptor());

  // Activa las validaciones automaticas, comprueba que se cumplan las reglas definidas en
  // lo DATA TRANSFER OBJECTS (DTOs), mediante class-validator
  app.useGlobalPipes(new ValidationPipe({}));

  const port = +configService.get('PORT');
  await app.listen(port);
  console.log(`Servidor corriendo en http://localhost:${port}/api`);
}
bootstrap().catch((err) => {
  console.log(err);
});
