import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('primer-etapa')
export class E1Controller {
  @Get('hello')
  setHello() {
    return 'Hola Nest.';
  }

  @Get('ping')
  setPing() {
    return { msg: 'pong' };
  }

  @Get('users/:id')
  getUser(@Param('id') id: number) {
    return `Usuario con id: ${id}`;
  }

  @Get('search')
  search(@Query('item') item: string) {
    return `Buscando: ${item}`;
  }
}
