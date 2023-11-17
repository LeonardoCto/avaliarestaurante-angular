import { TestBed } from '@angular/core/testing';

import { DadosCompartilhadosEditarRestauranteService } from './dados-compartilhados-editar-restaurante.service';

describe('DadosCompartilhadosEditarRestauranteService', () => {
  let service: DadosCompartilhadosEditarRestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosCompartilhadosEditarRestauranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
