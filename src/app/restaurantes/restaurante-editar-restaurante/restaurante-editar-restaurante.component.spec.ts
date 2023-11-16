import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteEditarRestauranteComponent } from './restaurante-editar-restaurante.component';

describe('RestauranteEditarRestauranteComponent', () => {
  let component: RestauranteEditarRestauranteComponent;
  let fixture: ComponentFixture<RestauranteEditarRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteEditarRestauranteComponent]
    });
    fixture = TestBed.createComponent(RestauranteEditarRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
