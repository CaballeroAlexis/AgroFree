import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosHomeComponent } from './insumos-home.component';

describe('InsumosHomeComponent', () => {
  let component: InsumosHomeComponent;
  let fixture: ComponentFixture<InsumosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
