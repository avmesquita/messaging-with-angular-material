import { TestBed } from '@angular/core/testing';

import { PrivacyMessageService } from './privacy-message.service';

describe('PrivacyMessageService', () => {
  let service: PrivacyMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivacyMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
