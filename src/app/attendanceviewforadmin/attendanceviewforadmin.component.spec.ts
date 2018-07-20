import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceviewforadminComponent } from './attendanceviewforadmin.component';

describe('AttendanceviewforadminComponent', () => {
  let component: AttendanceviewforadminComponent;
  let fixture: ComponentFixture<AttendanceviewforadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceviewforadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceviewforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
