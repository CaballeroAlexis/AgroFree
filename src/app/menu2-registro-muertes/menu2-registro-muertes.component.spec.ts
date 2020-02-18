import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2RegistroMuertesComponent } from './menu2-registro-muertes.component';

describe('Menu2RegistroMuertesComponent', () => {
  let component: Menu2RegistroMuertesComponent;
  let fixture: ComponentFixture<Menu2RegistroMuertesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu2RegistroMuertesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu2RegistroMuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
