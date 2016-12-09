/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PanelDataService } from './panel-data.service';

describe('PanelDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelDataService]
    });
  });

  it('should ...', inject([PanelDataService], (service: PanelDataService) => {
    expect(service).toBeTruthy();
  }));
});
