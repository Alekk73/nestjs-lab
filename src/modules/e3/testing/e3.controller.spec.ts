import { Test, TestingModule } from '@nestjs/testing';
import { E3Controller } from '../e3.controller';
import { APP_GUARD } from '@nestjs/core';

describe('E3Controller', () => {
  let controller: E3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [E3Controller],
      // Se mockea el guard para no bloquee cada test de petición
      providers: [
        {
          provide: APP_GUARD,
          useClass: class {
            canActivate() {
              return true; // Siempre permite, replica el funcionamiento del GUARD correcto
            }
          },
        },
      ],
    }).compile();

    controller = module.get<E3Controller>(E3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Debería devolver el string cuando pasa el guard', () => {
    expect(controller.pruebaHeader()).toBe('Paso el guard');
  });
});
