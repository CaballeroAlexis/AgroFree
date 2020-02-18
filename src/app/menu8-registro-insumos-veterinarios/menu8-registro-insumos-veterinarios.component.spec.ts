import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu8RegistroInsumosVeterinariosComponent } from './menu8-registro-insumos-veterinarios.component';

describe('Menu8RegistroInsumosVeterinariosComponent', () => {
  let component: Menu8RegistroInsumosVeterinariosComponent;
  let fixture: ComponentFixture<Menu8RegistroInsumosVeterinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu8RegistroInsumosVeterinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu8RegistroInsumosVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
