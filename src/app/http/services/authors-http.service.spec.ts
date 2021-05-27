import { TestBed } from '@angular/core/testing';

import { AuthorsHttpService } from './authors-http.service';

describe('AuthorsHttpService', () => {
  let service: AuthorsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
