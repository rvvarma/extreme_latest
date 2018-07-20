import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentassignmentComponent } from './parentassignment.component';

describe('ParentassignmentComponent', () => {
  let component: ParentassignmentComponent;
  let fixture: ComponentFixture<ParentassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
