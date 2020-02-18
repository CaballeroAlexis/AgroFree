import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu3RegistroMantenimientoInstalacionPorcinaComponent } from './menu3-registro-mantenimiento-instalacion-porcina.component';

describe('Menu3RegistroMantenimientoInstalacionPorcinaComponent', () => {
  let component: Menu3RegistroMantenimientoInstalacionPorcinaComponent;
  let fixture: ComponentFixture<Menu3RegistroMantenimientoInstalacionPorcinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu3RegistroMantenimientoInstalacionPorcinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu3RegistroMantenimientoInstalacionPorcinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
