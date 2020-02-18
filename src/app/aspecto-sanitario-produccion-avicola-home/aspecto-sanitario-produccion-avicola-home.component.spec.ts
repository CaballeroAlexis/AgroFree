import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectoSanitarioProduccionAvicolaHomeComponent } from './aspecto-sanitario-produccion-avicola-home.component';

describe('AspectoSanitarioProduccionAvicolaHomeComponent', () => {
  let component: AspectoSanitarioProduccionAvicolaHomeComponent;
  let fixture: ComponentFixture<AspectoSanitarioProduccionAvicolaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectoSanitarioProduccionAvicolaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectoSanitarioProduccionAvicolaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
