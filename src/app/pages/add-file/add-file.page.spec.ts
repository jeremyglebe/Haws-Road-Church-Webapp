import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilePage } from './add-file.page';

describe('AddFilePage', () => {
  let component: AddFilePage;
  let fixture: ComponentFixture<AddFilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
