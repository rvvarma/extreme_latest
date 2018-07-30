import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentaccountsComponent } from './parentaccounts.component';

describe('ParentaccountsComponent', () => {
  let component: ParentaccountsComponent;
  let fixture: ComponentFixture<ParentaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
