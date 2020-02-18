import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu8RegistroInsumosLimpiezaDesinfeccionComponent } from './menu8-registro-insumos-limpieza-desinfeccion.component';

describe('Menu8RegistroInsumosLimpiezaDesinfeccionComponent', () => {
  let component: Menu8RegistroInsumosLimpiezaDesinfeccionComponent;
  let fixture: ComponentFixture<Menu8RegistroInsumosLimpiezaDesinfeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu8RegistroInsumosLimpiezaDesinfeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu8RegistroInsumosLimpiezaDesinfeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
