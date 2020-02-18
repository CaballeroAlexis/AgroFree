import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2RegistroSignosVisiblesEnfermedadComponent } from './menu2-registro-signos-visibles-enfermedad.component';

describe('Menu2RegistroSignosVisiblesEnfermedadComponent', () => {
  let component: Menu2RegistroSignosVisiblesEnfermedadComponent;
  let fixture: ComponentFixture<Menu2RegistroSignosVisiblesEnfermedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu2RegistroSignosVisiblesEnfermedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu2RegistroSignosVisiblesEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
