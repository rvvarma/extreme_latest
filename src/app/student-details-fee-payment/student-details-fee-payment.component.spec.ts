import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsFeePaymentComponent } from './student-details-fee-payment.component';

describe('StudentDetailsFeePaymentComponent', () => {
  let component: StudentDetailsFeePaymentComponent;
  let fixture: ComponentFixture<StudentDetailsFeePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetailsFeePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsFeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
