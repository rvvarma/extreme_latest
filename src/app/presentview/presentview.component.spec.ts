import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentviewComponent } from './presentview.component';

describe('PresentviewComponent', () => {
  let component: PresentviewComponent;
  let fixture: ComponentFixture<PresentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
