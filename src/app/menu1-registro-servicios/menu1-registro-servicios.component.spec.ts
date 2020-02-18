import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1RegistroServiciosComponent } from './menu1-registro-servicios.component';

describe('Menu1RegistroServiciosComponent', () => {
  let component: Menu1RegistroServiciosComponent;
  let fixture: ComponentFixture<Menu1RegistroServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1RegistroServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1RegistroServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
