import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu5RegistroMantenimientoInstalacionEnfermeriaComponent } from './menu5-registro-mantenimiento-instalacion-enfermeria.component';

describe('Menu5RegistroMantenimientoInstalacionEnfermeriaComponent', () => {
  let component: Menu5RegistroMantenimientoInstalacionEnfermeriaComponent;
  let fixture: ComponentFixture<Menu5RegistroMantenimientoInstalacionEnfermeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu5RegistroMantenimientoInstalacionEnfermeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu5RegistroMantenimientoInstalacionEnfermeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
