import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteFinalizarComponent } from './restaurante-finalizar.component';

describe('RestauranteFinalizarComponent', () => {
  let component: RestauranteFinalizarComponent;
  let fixture: ComponentFixture<RestauranteFinalizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteFinalizarComponent]
    });
    fixture = TestBed.createComponent(RestauranteFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
