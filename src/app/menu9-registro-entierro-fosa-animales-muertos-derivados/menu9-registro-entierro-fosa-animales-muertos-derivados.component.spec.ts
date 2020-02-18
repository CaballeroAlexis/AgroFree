import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent } from './menu9-registro-entierro-fosa-animales-muertos-derivados.component';

describe('Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent', () => {
  let component: Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent;
  let fixture: ComponentFixture<Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
