import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdViewPage } from './third-view.page';

describe('ThirdViewPage', () => {
  let component: ThirdViewPage;
  let fixture: ComponentFixture<ThirdViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
