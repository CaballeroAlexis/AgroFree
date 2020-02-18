import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsertRowComponent } from './edit-insert-row.component';

describe('EditInsertRowComponent', () => {
  let component: EditInsertRowComponent;
  let fixture: ComponentFixture<EditInsertRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInsertRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsertRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
