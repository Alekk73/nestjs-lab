import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { E1Module } from './modules/e1/e1.module';
import { E2Module } from './modules/e2/e2.module';
import { E3Module } from './modules/e3/e3.module';
import { LoggerMiddleware } from './modules/e3/middlewares/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    E1Module,
    E2Module,
    E3Module,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('{*splat}');
  }
}
