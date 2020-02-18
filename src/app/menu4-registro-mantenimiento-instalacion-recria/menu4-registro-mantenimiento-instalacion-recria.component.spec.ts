import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu4RegistroMantenimientoInstalacionRecriaComponent } from './menu4-registro-mantenimiento-instalacion-recria.component';

describe('Menu4RegistroMantenimientoInstalacionRecriaComponent', () => {
  let component: Menu4RegistroMantenimientoInstalacionRecriaComponent;
  let fixture: ComponentFixture<Menu4RegistroMantenimientoInstalacionRecriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu4RegistroMantenimientoInstalacionRecriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu4RegistroMantenimientoInstalacionRecriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
