import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1RegistroPartoNacimientoComponent } from './menu1-registro-parto-nacimiento.component';

describe('Menu1RegistroPartoNacimientoComponent', () => {
  let component: Menu1RegistroPartoNacimientoComponent;
  let fixture: ComponentFixture<Menu1RegistroPartoNacimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1RegistroPartoNacimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1RegistroPartoNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
