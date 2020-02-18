import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu6RegistroVisitasEventualesComponent } from './menu6-registro-visitas-eventuales.component';

describe('Menu6RegistroVisitasEventualesComponent', () => {
  let component: Menu6RegistroVisitasEventualesComponent;
  let fixture: ComponentFixture<Menu6RegistroVisitasEventualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu6RegistroVisitasEventualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu6RegistroVisitasEventualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
