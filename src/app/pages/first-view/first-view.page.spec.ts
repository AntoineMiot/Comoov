import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstViewPage } from './first-view.page';

describe('FirstViewPage', () => {
  let component: FirstViewPage;
  let fixture: ComponentFixture<FirstViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
