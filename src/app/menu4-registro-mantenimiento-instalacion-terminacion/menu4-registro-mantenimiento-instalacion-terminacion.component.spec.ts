import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu4RegistroMantenimientoInstalacionTerminacionComponent } from './menu4-registro-mantenimiento-instalacion-terminacion.component';

describe('Menu4RegistroMantenimientoInstalacionTerminacionComponent', () => {
  let component: Menu4RegistroMantenimientoInstalacionTerminacionComponent;
  let fixture: ComponentFixture<Menu4RegistroMantenimientoInstalacionTerminacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu4RegistroMantenimientoInstalacionTerminacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu4RegistroMantenimientoInstalacionTerminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
