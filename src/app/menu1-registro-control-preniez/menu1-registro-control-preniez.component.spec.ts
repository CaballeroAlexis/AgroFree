import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1RegistroControlPreniezComponent } from './menu1-registro-control-preniez.component';

describe('Menu1RegistroControlPreniezComponent', () => {
  let component: Menu1RegistroControlPreniezComponent;
  let fixture: ComponentFixture<Menu1RegistroControlPreniezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1RegistroControlPreniezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1RegistroControlPreniezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
