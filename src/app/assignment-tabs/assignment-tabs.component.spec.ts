import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTabsComponent } from './assignment-tabs.component';

describe('AssignmentTabsComponent', () => {
  let component: AssignmentTabsComponent;
  let fixture: ComponentFixture<AssignmentTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
