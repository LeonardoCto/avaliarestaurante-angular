import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteCadastroComponent } from './restaurante-cadastro.component';

describe('RestauranteCadastroComponent', () => {
  let component: RestauranteCadastroComponent;
  let fixture: ComponentFixture<RestauranteCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteCadastroComponent]
    });
    fixture = TestBed.createComponent(RestauranteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
