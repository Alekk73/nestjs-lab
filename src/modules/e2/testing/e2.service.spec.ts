import { Test, TestingModule } from '@nestjs/testing';
import { E2Service } from '../e2.service';

describe('E2Service', () => {
  let service: E2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [E2Service],
    }).compile();

    service = module.get<E2Service>(E2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Deberia retornar la lista de todos los usuarios.', () => {
    const usersMock = [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Martina' },
    ];

    expect(service.getAllUsers()).toEqual(usersMock);
  });

  it('Deberia retornar el usaurio solicitado', () => {
    const id: number = 1;
    const userMock = { id: id, name: 'Juan' };

    expect(service.getById(id)).toEqual(userMock);
  });

  // Testea el funcionamiento findUser que es privada en el service
  it('debería lanzar error si no existe el usuario', () => {
    expect(() => service.getById(99)).toThrow(
      'Usuario con id 99 no encontrado.',
    );
  });

  it('Deberia guardar el nuevo usaurio y devolver un mensaje', () => {
    const newUserMock = { name: 'Ana' };
    const result = 'Usuario creado correctamente';

    expect(service.create(newUserMock)).toBe(result);
  });
});
