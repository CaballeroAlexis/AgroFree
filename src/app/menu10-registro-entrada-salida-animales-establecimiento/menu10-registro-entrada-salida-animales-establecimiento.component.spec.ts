import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent } from './menu10-registro-entrada-salida-animales-establecimiento.component';

describe('Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent', () => {
  let component: Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent;
  let fixture: ComponentFixture<Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
