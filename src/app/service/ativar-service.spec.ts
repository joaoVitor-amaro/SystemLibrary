import { TestBed } from '@angular/core/testing';

import { AtivarService } from './ativar-service';

describe('AtivarService', () => {
  let service: AtivarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
