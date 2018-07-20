import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeregisterComponent } from './feeregister.component';

describe('FeeregisterComponent', () => {
  let component: FeeregisterComponent;
  let fixture: ComponentFixture<FeeregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
