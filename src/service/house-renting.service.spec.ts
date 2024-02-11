/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HouseRentingService } from './house-renting.service';

describe('Service: HouseRenting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseRentingService]
    });
  });

  it('should ...', inject([HouseRentingService], (service: HouseRentingService) => {
    expect(service).toBeTruthy();
  }));
});
