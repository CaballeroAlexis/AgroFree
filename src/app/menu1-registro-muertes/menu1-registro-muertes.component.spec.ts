import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1RegistroMuertesComponent } from './menu1-registro-muertes.component';

describe('Menu1RegistroMuertesComponent', () => {
  let component: Menu1RegistroMuertesComponent;
  let fixture: ComponentFixture<Menu1RegistroMuertesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1RegistroMuertesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1RegistroMuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
