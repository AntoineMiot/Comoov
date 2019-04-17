import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagerCartePage } from './passager-carte.page';

describe('PassagerCartePage', () => {
  let component: PassagerCartePage;
  let fixture: ComponentFixture<PassagerCartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagerCartePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagerCartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
