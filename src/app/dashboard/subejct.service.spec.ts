import { TestBed } from '@angular/core/testing';

import { SubejctService } from './subejct.service';

describe('SubejctService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubejctService = TestBed.get(SubejctService);
    expect(service).toBeTruthy();
  });
});
