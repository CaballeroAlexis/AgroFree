import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCapacitacionHomeComponent } from './registro-capacitacion-home.component';

describe('RegistroCapacitacionHomeComponent', () => {
  let component: RegistroCapacitacionHomeComponent;
  let fixture: ComponentFixture<RegistroCapacitacionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCapacitacionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCapacitacionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
