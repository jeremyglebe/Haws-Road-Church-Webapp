import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryModalPage } from './gallery-modal.page';

describe('GalleryModalPage', () => {
  let component: GalleryModalPage;
  let fixture: ComponentFixture<GalleryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
