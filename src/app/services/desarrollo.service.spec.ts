import { TestBed, inject } from '@angular/core/testing';

import { DesarrolloService } from './desarrollo.service';

describe('DesarrolloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesarrolloService]
    });
  });

  it('should be created', inject([DesarrolloService], (service: DesarrolloService) => {
    expect(service).toBeTruthy();
  }));
});
