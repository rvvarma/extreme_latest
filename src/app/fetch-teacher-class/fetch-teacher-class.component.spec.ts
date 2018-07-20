import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchTeacherClassComponent } from './fetch-teacher-class.component';

describe('FetchTeacherClassComponent', () => {
  let component: FetchTeacherClassComponent;
  let fixture: ComponentFixture<FetchTeacherClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchTeacherClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchTeacherClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
