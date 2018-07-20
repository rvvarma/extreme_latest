

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignclasstostudentComponent } from './assignclasstostudent.component';

describe('AssignclasstostudentComponent', () => {
  let component: AssignclasstostudentComponent;
  let fixture: ComponentFixture<AssignclasstostudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignclasstostudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignclasstostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
