import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class E2Service {
  users = [
    {
      id: 1,
      name: 'Juan',
    },
    {
      id: 2,
      name: 'Martina',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getById(id: number) {
    return this.findUser(id);
  }

  create(body: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      name: body.name,
    };

    this.users.push(newUser);
    return 'Usuario creado correctamente';
  }

  private findUser(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new Error(`Usuario con id ${id} no encontrado.`);
    return user;
  }
}
