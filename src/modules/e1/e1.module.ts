import { Module } from '@nestjs/common';
import { E1Controller } from './e1.controller';

@Module({
  controllers: [E1Controller],
})
export class E1Module {}
