import { Module } from '@nestjs/common';
import { E2Service } from './e2.service';
import { E2Controller } from './e2.controller';

@Module({
  controllers: [E2Controller],
  providers: [E2Service],
})
export class E2Module {}
