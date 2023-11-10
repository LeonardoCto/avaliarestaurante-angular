import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteListagemComponent } from './restaurante-listagem.component';

describe('RestauranteListagemComponent', () => {
  let component: RestauranteListagemComponent;
  let fixture: ComponentFixture<RestauranteListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteListagemComponent]
    });
    fixture = TestBed.createComponent(RestauranteListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
