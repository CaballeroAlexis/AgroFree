import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent } from './menu12-registro-toma-muestra-envio-agua-fisicoquimico.component';

describe('Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent', () => {
  let component: Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent;
  let fixture: ComponentFixture<Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
