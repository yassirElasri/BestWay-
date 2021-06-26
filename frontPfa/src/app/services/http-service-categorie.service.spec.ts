import { TestBed } from '@angular/core/testing';

import { HttpServiceCategorieService } from './http-service-categorie.service';

describe('HttpServiceCategorieService', () => {
  let service: HttpServiceCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiceCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
