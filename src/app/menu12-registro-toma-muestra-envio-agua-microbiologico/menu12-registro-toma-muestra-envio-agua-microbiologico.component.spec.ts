import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent } from './menu12-registro-toma-muestra-envio-agua-microbiologico.component';

describe('Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent', () => {
  let component: Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent;
  let fixture: ComponentFixture<Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
