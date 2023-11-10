import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteEnderecoComponent } from './restaurante-endereco.component';

describe('RestauranteEnderecoComponent', () => {
  let component: RestauranteEnderecoComponent;
  let fixture: ComponentFixture<RestauranteEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteEnderecoComponent]
    });
    fixture = TestBed.createComponent(RestauranteEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
