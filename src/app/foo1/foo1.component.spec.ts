import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foo1Component } from './foo1.component';

describe('Foo1Component', () => {
  let component: Foo1Component;
  let fixture: ComponentFixture<Foo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
