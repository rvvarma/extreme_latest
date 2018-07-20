import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentdashboardComponent } from './parentdashboard.component';

describe('ParentdashboardComponent', () => {
  let component: ParentdashboardComponent;
  let fixture: ComponentFixture<ParentdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
