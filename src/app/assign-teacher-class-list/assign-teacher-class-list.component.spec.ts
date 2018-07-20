import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTeacherClassListComponent } from './assign-teacher-class-list.component';

describe('AssignTeacherClassListComponent', () => {
  let component: AssignTeacherClassListComponent;
  let fixture: ComponentFixture<AssignTeacherClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTeacherClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTeacherClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
