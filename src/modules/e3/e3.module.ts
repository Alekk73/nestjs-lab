import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { E3Controller } from './e3.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  controllers: [E3Controller],
})
export class E3Module implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Aplica el middleware solo a la ruta especifica
    consumer.apply(LoggerMiddleware).forRoutes('e3/prueba-middleware');
  }
}
