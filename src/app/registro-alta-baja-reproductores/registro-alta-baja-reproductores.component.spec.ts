import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAltaBajaReproductoresComponent } from './registro-alta-baja-reproductores.component';

describe('RegistroAltaBajaReproductoresComponent', () => {
  let component: RegistroAltaBajaReproductoresComponent;
  let fixture: ComponentFixture<RegistroAltaBajaReproductoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAltaBajaReproductoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAltaBajaReproductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
