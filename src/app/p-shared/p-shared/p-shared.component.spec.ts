import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSharedComponent } from './p-shared.component';

describe('PSharedComponent', () => {
  let component: PSharedComponent;
  let fixture: ComponentFixture<PSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
