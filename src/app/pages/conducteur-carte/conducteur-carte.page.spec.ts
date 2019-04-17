import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducteurCartePage } from './conducteur-carte.page';

describe('ConducteurCartePage', () => {
  let component: ConducteurCartePage;
  let fixture: ComponentFixture<ConducteurCartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConducteurCartePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConducteurCartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
