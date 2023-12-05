import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteRelatorioComponent } from './restaurante-relatorio.component';

describe('RestauranteRelatorioComponent', () => {
  let component: RestauranteRelatorioComponent;
  let fixture: ComponentFixture<RestauranteRelatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteRelatorioComponent]
    });
    fixture = TestBed.createComponent(RestauranteRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
