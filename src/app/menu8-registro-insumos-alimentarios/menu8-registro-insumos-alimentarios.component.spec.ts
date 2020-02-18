import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu8RegistroInsumosAlimentariosComponent } from './menu8-registro-insumos-alimentarios.component';

describe('Menu8RegistroInsumosAlimentariosComponent', () => {
  let component: Menu8RegistroInsumosAlimentariosComponent;
  let fixture: ComponentFixture<Menu8RegistroInsumosAlimentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu8RegistroInsumosAlimentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu8RegistroInsumosAlimentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
