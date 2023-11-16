import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPainelComponent } from './usuario-painel.component';

describe('UsuarioPainelComponent', () => {
  let component: UsuarioPainelComponent;
  let fixture: ComponentFixture<UsuarioPainelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioPainelComponent]
    });
    fixture = TestBed.createComponent(UsuarioPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
