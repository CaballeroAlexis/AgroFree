import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionUbicacionTrampasRoedoresHomeComponent } from './identificacion-ubicacion-trampas-roedores-home.component';

describe('IdentificacionUbicacionTrampasRoedoresHomeComponent', () => {
  let component: IdentificacionUbicacionTrampasRoedoresHomeComponent;
  let fixture: ComponentFixture<IdentificacionUbicacionTrampasRoedoresHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacionUbicacionTrampasRoedoresHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionUbicacionTrampasRoedoresHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
