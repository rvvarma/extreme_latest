import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSharedComponent } from './t-shared.component';

describe('TSharedComponent', () => {
  let component: TSharedComponent;
  let fixture: ComponentFixture<TSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
