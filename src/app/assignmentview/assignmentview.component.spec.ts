import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentviewComponent } from './assignmentview.component';

describe('AssignmentviewComponent', () => {
  let component: AssignmentviewComponent;
  let fixture: ComponentFixture<AssignmentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
