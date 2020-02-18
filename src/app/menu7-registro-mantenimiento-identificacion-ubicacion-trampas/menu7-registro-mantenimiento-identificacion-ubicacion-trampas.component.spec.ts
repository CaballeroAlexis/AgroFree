import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent } from './menu7-registro-mantenimiento-identificacion-ubicacion-trampas.component';

describe('Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent', () => {
  let component: Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent;
  let fixture: ComponentFixture<Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
