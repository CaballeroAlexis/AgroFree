import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu5RegistroMantenimientoInstalacionCuarentenaComponent } from './menu5-registro-mantenimiento-instalacion-cuarentena.component';

describe('Menu5RegistroMantenimientoInstalacionCuarentenaComponent', () => {
  let component: Menu5RegistroMantenimientoInstalacionCuarentenaComponent;
  let fixture: ComponentFixture<Menu5RegistroMantenimientoInstalacionCuarentenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu5RegistroMantenimientoInstalacionCuarentenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu5RegistroMantenimientoInstalacionCuarentenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
