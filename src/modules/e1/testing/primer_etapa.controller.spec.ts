import { Test, TestingModule } from '@nestjs/testing';
import { E1Controller } from '../e1.controller';

describe('PrimerEtapaController', () => {
  let controller: E1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [E1Controller],
    }).compile();

    controller = module.get<E1Controller>(E1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Deberia devolver la cadena Hola Nest.', () => {
    // Configuración del valor que se espera
    const result = 'Hola Nest.';

    // Ejecuta el método 'setHello' del controlador y comprueba que el resultado es correcto
    expect(controller.setHello()).toBe(result);
  });

  it('Deberia devolver un objeto con msg: "pong"', () => {
    const result = { msg: 'pong' };

    expect(controller.setPing()).toEqual(result);
  });

  it('Deberia devolver un mensaje con el id del usuario pedido.', () => {
    const result = 'Usuario con id: 1';

    expect(controller.getUser(1)).toBe(result);
  });

  it('Deberiai devolver el item buscado', () => {
    const result = 'Buscando: Goma';

    expect(controller.search('Goma')).toBe(result);
  });
});
