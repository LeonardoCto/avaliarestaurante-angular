import { TestBed } from '@angular/core/testing';

import { DadosCompartilhadosAvaliacaoService } from './dados-compartilhados-avaliacao.service';

describe('DadosCompartilhadosAvaliacaoService', () => {
  let service: DadosCompartilhadosAvaliacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosCompartilhadosAvaliacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
