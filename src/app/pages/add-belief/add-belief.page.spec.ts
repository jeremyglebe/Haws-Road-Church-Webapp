import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeliefPage } from './add-belief.page';

describe('AddBeliefPage', () => {
  let component: AddBeliefPage;
  let fixture: ComponentFixture<AddBeliefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeliefPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeliefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
