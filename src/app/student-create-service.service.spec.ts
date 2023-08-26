/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentCreateServiceService } from './student-create-service.service';

describe('Service: StudentCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentCreateServiceService]
    });
  });

  it('should ...', inject([StudentCreateServiceService], (service: StudentCreateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
