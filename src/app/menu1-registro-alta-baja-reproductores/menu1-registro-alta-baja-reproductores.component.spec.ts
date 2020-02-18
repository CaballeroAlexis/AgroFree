import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1RegistroAltaBajaReproductoresComponent } from './menu1-registro-alta-baja-reproductores.component';

describe('Menu1RegistroAltaBajaReproductoresComponent', () => {
  let component: Menu1RegistroAltaBajaReproductoresComponent;
  let fixture: ComponentFixture<Menu1RegistroAltaBajaReproductoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1RegistroAltaBajaReproductoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1RegistroAltaBajaReproductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
