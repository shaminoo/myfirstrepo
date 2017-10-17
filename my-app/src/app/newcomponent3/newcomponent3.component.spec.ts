import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcomponent3Component } from './newcomponent3.component';

describe('Newcomponent3Component', () => {
  let component: Newcomponent3Component;
  let fixture: ComponentFixture<Newcomponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newcomponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newcomponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
