import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu9RegistroExtraccionCamaGuanoComponent } from './menu9-registro-extraccion-cama-guano.component';

describe('Menu9RegistroExtraccionCamaGuanoComponent', () => {
  let component: Menu9RegistroExtraccionCamaGuanoComponent;
  let fixture: ComponentFixture<Menu9RegistroExtraccionCamaGuanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu9RegistroExtraccionCamaGuanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu9RegistroExtraccionCamaGuanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
