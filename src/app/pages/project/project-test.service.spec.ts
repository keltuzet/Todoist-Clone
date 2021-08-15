import { TestBed } from '@angular/core/testing';

import { ProjectTestService } from './project-test.service';

describe('ProjectTestService', () => {
  let service: ProjectTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
