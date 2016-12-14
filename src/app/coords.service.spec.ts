/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MouseCoordsService } from './mouse-coords.service';

describe('MouseCoordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MouseCoordsService]
    });
  });

  it('should ...', inject([MouseCoordsService], (service: MouseCoordsService) => {
    expect(service).toBeTruthy();
  }));
});
