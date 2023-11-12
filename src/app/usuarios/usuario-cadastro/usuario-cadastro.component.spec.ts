import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCadastroComponent } from './usuario-cadastro.component';

describe('UsuarioCadastroComponent', () => {
  let component: UsuarioCadastroComponent;
  let fixture: ComponentFixture<UsuarioCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioCadastroComponent]
    });
    fixture = TestBed.createComponent(UsuarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
