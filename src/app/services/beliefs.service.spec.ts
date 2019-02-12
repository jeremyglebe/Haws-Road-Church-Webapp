import { TestBed } from '@angular/core/testing';

import { BeliefsService } from './beliefs.service';

describe('BeliefsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeliefsService = TestBed.get(BeliefsService);
    expect(service).toBeTruthy();
  });
});
