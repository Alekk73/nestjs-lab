import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { E2Service } from './e2.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class E2Controller {
  constructor(private readonly e2Service: E2Service) {}

  @Get()
  getAllUsers() {
    return this.e2Service.getAllUsers();
  }

  @Get(':id')
  // ParseIntPipe valida y transforma automaticamente el id que viene como parametro (string) a NUMBER
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.e2Service.getById(id);
  }

  @Post('create')
  create(@Body() body: CreateUserDto) {
    return this.e2Service.create(body);
  }
}
