import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteImagemComponent } from './restaurante-imagem.component';

describe('RestauranteImagemComponent', () => {
  let component: RestauranteImagemComponent;
  let fixture: ComponentFixture<RestauranteImagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteImagemComponent]
    });
    fixture = TestBed.createComponent(RestauranteImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
