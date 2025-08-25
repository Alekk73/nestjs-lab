import { Controller, Get, UseGuards } from '@nestjs/common';
import { BasicGuard } from './guard/basic.guard';

@UseGuards(BasicGuard)
@Controller('e3')
export class E3Controller {
  @Get()
  pruebaHeader() {
    return 'Paso el guard';
  }
}
