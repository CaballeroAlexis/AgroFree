import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu6RegistroVisitasVeterinariasComponent } from './menu6-registro-visitas-veterinarias.component';

describe('Menu6RegistroVisitasVeterinariasComponent', () => {
  let component: Menu6RegistroVisitasVeterinariasComponent;
  let fixture: ComponentFixture<Menu6RegistroVisitasVeterinariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu6RegistroVisitasVeterinariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu6RegistroVisitasVeterinariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
