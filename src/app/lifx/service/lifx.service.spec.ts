import { TestBed, inject } from '@angular/core/testing';

import { LifxService } from './lifx.service';

describe('LifxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LifxService]
    });
  });

  it('should be created', inject([LifxService], (service: LifxService) => {
    expect(service).toBeTruthy();
  }));
});
