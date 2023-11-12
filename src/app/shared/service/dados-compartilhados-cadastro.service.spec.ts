import { TestBed } from '@angular/core/testing';

import { DadosCompartilhadosCadastroService } from './dados-compartilhados-cadastro.service';

describe('DadosCompartilhadosCadastroService', () => {
  let service: DadosCompartilhadosCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosCompartilhadosCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
