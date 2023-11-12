import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEnderecoComponent } from './usuario-endereco.component';

describe('UsuarioEnderecoComponent', () => {
  let component: UsuarioEnderecoComponent;
  let fixture: ComponentFixture<UsuarioEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioEnderecoComponent]
    });
    fixture = TestBed.createComponent(UsuarioEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
