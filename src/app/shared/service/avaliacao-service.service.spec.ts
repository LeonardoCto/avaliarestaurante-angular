import { TestBed } from '@angular/core/testing';

import { AvaliacaoServiceService } from './avaliacao-service.service';

describe('AvaliacaoServiceService', () => {
  let service: AvaliacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
