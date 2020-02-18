import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasVeterinariasEventualesHomeComponent } from './visitas-veterinarias-eventuales-home.component';

describe('VisitasVeterinariasEventualesHomeComponent', () => {
  let component: VisitasVeterinariasEventualesHomeComponent;
  let fixture: ComponentFixture<VisitasVeterinariasEventualesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasVeterinariasEventualesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasVeterinariasEventualesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
