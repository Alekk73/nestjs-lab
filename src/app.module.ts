import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrimerEtapaModule } from './modules/e1/e1.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrimerEtapaModule,
  ],
})
export class AppModule {}
