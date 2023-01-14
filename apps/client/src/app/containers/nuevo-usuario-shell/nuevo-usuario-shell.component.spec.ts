import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUsuarioShellComponent } from './nuevo-usuario-shell.component';

describe('NuevoUsuarioShellComponent', () => {
  let component: NuevoUsuarioShellComponent;
  let fixture: ComponentFixture<NuevoUsuarioShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoUsuarioShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoUsuarioShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
