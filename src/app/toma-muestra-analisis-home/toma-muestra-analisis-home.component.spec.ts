import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaMuestraAnalisisHomeComponent } from './toma-muestra-analisis-home.component';

describe('TomaMuestraAnalisisHomeComponent', () => {
  let component: TomaMuestraAnalisisHomeComponent;
  let fixture: ComponentFixture<TomaMuestraAnalisisHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaMuestraAnalisisHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaMuestraAnalisisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
