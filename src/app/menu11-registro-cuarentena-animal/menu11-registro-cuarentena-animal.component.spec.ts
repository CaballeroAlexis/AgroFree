import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu11RegistroCuarentenaAnimalComponent } from './menu11-registro-cuarentena-animal.component';

describe('Menu11RegistroCuarentenaAnimalComponent', () => {
  let component: Menu11RegistroCuarentenaAnimalComponent;
  let fixture: ComponentFixture<Menu11RegistroCuarentenaAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu11RegistroCuarentenaAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu11RegistroCuarentenaAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
