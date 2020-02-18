import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectoSanitarioProduccionPorcinaHomeComponent } from './aspecto-sanitario-produccion-porcina-home.component';

describe('AspectoSanitarioProduccionPorcinaHomeComponent', () => {
  let component: AspectoSanitarioProduccionPorcinaHomeComponent;
  let fixture: ComponentFixture<AspectoSanitarioProduccionPorcinaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectoSanitarioProduccionPorcinaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectoSanitarioProduccionPorcinaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
