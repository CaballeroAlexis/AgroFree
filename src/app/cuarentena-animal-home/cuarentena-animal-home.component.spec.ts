import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuarentenaAnimalHomeComponent } from './cuarentena-animal-home.component';

describe('CuarentenaAnimalHomeComponent', () => {
  let component: CuarentenaAnimalHomeComponent;
  let fixture: ComponentFixture<CuarentenaAnimalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuarentenaAnimalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuarentenaAnimalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
