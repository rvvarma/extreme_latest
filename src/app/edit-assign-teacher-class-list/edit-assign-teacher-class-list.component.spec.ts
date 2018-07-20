import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssignTeacherClassListComponent } from './edit-assign-teacher-class-list.component';

describe('EditAssignTeacherClassListComponent', () => {
  let component: EditAssignTeacherClassListComponent;
  let fixture: ComponentFixture<EditAssignTeacherClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssignTeacherClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssignTeacherClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
