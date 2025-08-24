import { Test, TestingModule } from '@nestjs/testing';
import { E2Controller } from '../e2.controller';
import { E2Service } from '../e2.service';

describe('E2Controller', () => {
  let controller: E2Controller;
  let service: E2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [E2Controller],
      providers: [E2Service],
    }).compile();

    controller = module.get<E2Controller>(E2Controller);
    service = module.get<E2Service>(E2Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Deberia devolver la lista de usaurios', () => {
    const usersMock = [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Martina' },
    ];

    jest.spyOn(service, 'getAllUsers').mockImplementation(() => usersMock);

    expect(controller.getAllUsers()).toEqual(usersMock);
  });

  it('Deberia devolver los datos del usuario solicitado por ID', () => {
    const id: number = 1;
    const userMock = { id: id, name: 'Juan' };
    jest.spyOn(service, 'getById').mockImplementation(() => userMock);

    expect(controller.getById(id)).toEqual(userMock);
  });

  it('Deberia crear un usuario', () => {
    const body = { name: 'Maria' };
    const result = 'Usuario creado correctamente';

    jest.spyOn(service, 'create').mockImplementation(() => result);

    const response = controller.create(body);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(service.create).toHaveBeenCalledWith(body);
    expect(response).toBe(result);
  });
});
