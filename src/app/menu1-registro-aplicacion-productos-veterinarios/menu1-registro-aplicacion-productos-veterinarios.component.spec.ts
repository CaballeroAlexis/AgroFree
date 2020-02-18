import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1RegistroAplicacionProductosVeterinariosComponent } from './menu1-registro-aplicacion-productos-veterinarios.component';

describe('Menu1RegistroAplicacionProductosVeterinariosComponent', () => {
  let component: Menu1RegistroAplicacionProductosVeterinariosComponent;
  let fixture: ComponentFixture<Menu1RegistroAplicacionProductosVeterinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1RegistroAplicacionProductosVeterinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1RegistroAplicacionProductosVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
