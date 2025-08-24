import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { E1Module } from './modules/e1/e1.module';
import { E2Module } from './modules/e2/e2.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    E1Module,
    E2Module,
  ],
})
export class AppModule {}
