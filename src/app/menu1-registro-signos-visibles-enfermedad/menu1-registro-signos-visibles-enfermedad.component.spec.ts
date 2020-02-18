import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1RegistroSignosVisiblesEnfermedadComponent } from './menu1-registro-signos-visibles-enfermedad.component';

describe('Menu1RegistroSignosVisiblesEnfermedadComponent', () => {
  let component: Menu1RegistroSignosVisiblesEnfermedadComponent;
  let fixture: ComponentFixture<Menu1RegistroSignosVisiblesEnfermedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1RegistroSignosVisiblesEnfermedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1RegistroSignosVisiblesEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
