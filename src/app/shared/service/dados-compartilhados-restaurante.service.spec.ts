import { TestBed } from '@angular/core/testing';

import { DadosCompartilhadosRestauranteService } from './dados-compartilhados-restaurante.service';

describe('DadosCompartilhadosRestauranteService', () => {
  let service: DadosCompartilhadosRestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosCompartilhadosRestauranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
