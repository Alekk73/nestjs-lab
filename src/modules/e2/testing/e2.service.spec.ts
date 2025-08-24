import { Test, TestingModule } from '@nestjs/testing';
import { E2Service } from './e2.service';

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
});
