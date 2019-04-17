import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthViewPage } from './fourth-view.page';

describe('FourthViewPage', () => {
  let component: FourthViewPage;
  let fixture: ComponentFixture<FourthViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
