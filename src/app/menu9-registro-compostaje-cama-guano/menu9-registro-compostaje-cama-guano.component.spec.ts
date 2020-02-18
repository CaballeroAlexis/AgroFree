import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu9RegistroCompostajeCamaGuanoComponent } from './menu9-registro-compostaje-cama-guano.component';

describe('Menu9RegistroCompostajeCamaGuanoComponent', () => {
  let component: Menu9RegistroCompostajeCamaGuanoComponent;
  let fixture: ComponentFixture<Menu9RegistroCompostajeCamaGuanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu9RegistroCompostajeCamaGuanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu9RegistroCompostajeCamaGuanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
