import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2RegistroAplicacionProductosVeterinariosComponent } from './menu2-registro-aplicacion-productos-veterinarios.component';

describe('Menu2RegistroAplicacionProductosVeterinariosComponent', () => {
  let component: Menu2RegistroAplicacionProductosVeterinariosComponent;
  let fixture: ComponentFixture<Menu2RegistroAplicacionProductosVeterinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu2RegistroAplicacionProductosVeterinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu2RegistroAplicacionProductosVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
