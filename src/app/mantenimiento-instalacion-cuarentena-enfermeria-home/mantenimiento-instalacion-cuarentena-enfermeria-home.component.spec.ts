import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent } from './mantenimiento-instalacion-cuarentena-enfermeria-home.component';

describe('MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent', () => {
  let component: MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent;
  let fixture: ComponentFixture<MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
