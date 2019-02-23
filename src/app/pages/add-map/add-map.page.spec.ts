import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMapPage } from './add-map.page';

describe('AddMapPage', () => {
  let component: AddMapPage;
  let fixture: ComponentFixture<AddMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
