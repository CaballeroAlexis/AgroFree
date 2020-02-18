import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu13RegistroCapacitacionComponent } from './menu13-registro-capacitacion.component';

describe('Menu13RegistroCapacitacionComponent', () => {
  let component: Menu13RegistroCapacitacionComponent;
  let fixture: ComponentFixture<Menu13RegistroCapacitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu13RegistroCapacitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu13RegistroCapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
