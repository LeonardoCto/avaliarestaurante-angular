import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteVisualizarComponent } from './restaurante-visualizar.component';

describe('RestauranteVisualizarComponent', () => {
  let component: RestauranteVisualizarComponent;
  let fixture: ComponentFixture<RestauranteVisualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteVisualizarComponent]
    });
    fixture = TestBed.createComponent(RestauranteVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
