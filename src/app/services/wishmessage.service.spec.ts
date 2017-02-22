/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WishMessageService } from './wishmessage.service';

describe('WishMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishMessageService]
    });
  });

  it('should ...', inject([WishMessageService], (service: WishMessageService) => {
    expect(service).toBeTruthy();
  }));
});
