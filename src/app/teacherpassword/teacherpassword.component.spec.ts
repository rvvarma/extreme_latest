import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpasswordComponent } from './teacherpassword.component';

describe('TeacherpasswordComponent', () => {
  let component: TeacherpasswordComponent;
  let fixture: ComponentFixture<TeacherpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
