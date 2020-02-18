import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu9RegistroGestionResiduosVeterinariosComponent } from './menu9-registro-gestion-residuos-veterinarios.component';

describe('Menu9RegistroGestionResiduosVeterinariosComponent', () => {
  let component: Menu9RegistroGestionResiduosVeterinariosComponent;
  let fixture: ComponentFixture<Menu9RegistroGestionResiduosVeterinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu9RegistroGestionResiduosVeterinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu9RegistroGestionResiduosVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
