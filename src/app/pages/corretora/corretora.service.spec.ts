import { TestBed } from '@angular/core/testing';

import { CorretoraService } from './corretora.service';

describe('CorretoraService', () => {
  let service: CorretoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorretoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
