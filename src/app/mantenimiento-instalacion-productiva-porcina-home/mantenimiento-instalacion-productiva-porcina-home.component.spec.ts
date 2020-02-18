import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoInstalacionProductivaPorcinaHomeComponent } from './mantenimiento-instalacion-productiva-porcina-home.component';

describe('MantenimientoInstalacionProductivaPorcinaHomeComponent', () => {
  let component: MantenimientoInstalacionProductivaPorcinaHomeComponent;
  let fixture: ComponentFixture<MantenimientoInstalacionProductivaPorcinaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoInstalacionProductivaPorcinaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoInstalacionProductivaPorcinaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
