import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PrioritiesService } from './priorities.service';
import { PrioritiesStore } from './priorities.store';

describe('PrioritiesService', () => {
  let prioritiesService: PrioritiesService;
  let prioritiesStore: PrioritiesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrioritiesService, PrioritiesStore],
      imports: [ HttpClientTestingModule ]
    });

    prioritiesService = TestBed.inject(PrioritiesService);
    prioritiesStore = TestBed.inject(PrioritiesStore);
  });

  it('should be created', () => {
    expect(prioritiesService).toBeDefined();
  });

});
