import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosShellComponent } from './usuarios-shell.component';

describe('UsuariosShellComponent', () => {
  let component: UsuariosShellComponent;
  let fixture: ComponentFixture<UsuariosShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
