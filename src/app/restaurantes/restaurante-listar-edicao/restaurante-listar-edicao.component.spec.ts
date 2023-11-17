import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteListarEdicaoComponent } from './restaurante-listar-edicao.component';

describe('RestauranteListarEdicaoComponent', () => {
  let component: RestauranteListarEdicaoComponent;
  let fixture: ComponentFixture<RestauranteListarEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteListarEdicaoComponent]
    });
    fixture = TestBed.createComponent(RestauranteListarEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
