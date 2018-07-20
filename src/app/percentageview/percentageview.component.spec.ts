import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageviewComponent } from './percentageview.component';

describe('PercentageviewComponent', () => {
  let component: PercentageviewComponent;
  let fixture: ComponentFixture<PercentageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
