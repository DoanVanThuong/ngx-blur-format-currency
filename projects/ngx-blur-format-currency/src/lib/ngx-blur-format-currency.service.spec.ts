import { TestBed } from '@angular/core/testing';

import { NgxBlurFormatCurrencyService } from './ngx-blur-format-currency.service';

describe('NgxBlurFormatCurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBlurFormatCurrencyService = TestBed.get(NgxBlurFormatCurrencyService);
    expect(service).toBeTruthy();
  });
});
