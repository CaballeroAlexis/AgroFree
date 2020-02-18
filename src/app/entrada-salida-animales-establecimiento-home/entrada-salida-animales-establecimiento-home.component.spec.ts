import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaSalidaAnimalesEstablecimientoHomeComponent } from './entrada-salida-animales-establecimiento-home.component';

describe('EntradaSalidaAnimalesEstablecimientoHomeComponent', () => {
  let component: EntradaSalidaAnimalesEstablecimientoHomeComponent;
  let fixture: ComponentFixture<EntradaSalidaAnimalesEstablecimientoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaSalidaAnimalesEstablecimientoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaSalidaAnimalesEstablecimientoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
