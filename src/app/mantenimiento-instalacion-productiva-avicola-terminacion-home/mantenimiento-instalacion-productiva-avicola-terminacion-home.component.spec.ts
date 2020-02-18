import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent } from './mantenimiento-instalacion-productiva-avicola-terminacion-home.component';

describe('MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent', () => {
  let component: MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent;
  let fixture: ComponentFixture<MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
