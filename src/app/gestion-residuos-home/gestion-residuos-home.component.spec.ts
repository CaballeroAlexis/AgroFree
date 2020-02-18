import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionResiduosHomeComponent } from './gestion-residuos-home.component';

describe('GestionResiduosHomeComponent', () => {
  let component: GestionResiduosHomeComponent;
  let fixture: ComponentFixture<GestionResiduosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionResiduosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionResiduosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
