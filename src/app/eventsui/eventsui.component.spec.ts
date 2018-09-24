import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsuiComponent } from './eventsui.component';

describe('EventsuiComponent', () => {
  let component: EventsuiComponent;
  let fixture: ComponentFixture<EventsuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
