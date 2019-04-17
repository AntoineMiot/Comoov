import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagerCreditPage } from './passager-credit.page';

describe('PassagerCreditPage', () => {
  let component: PassagerCreditPage;
  let fixture: ComponentFixture<PassagerCreditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagerCreditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagerCreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
