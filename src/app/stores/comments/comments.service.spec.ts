import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';
import { CommentsStore } from './comments.store';

describe('CommentsService', () => {
  let commentsService: CommentsService;
  let commentsStore: CommentsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsService, CommentsStore],
      imports: [ HttpClientTestingModule ]
    });

    commentsService = TestBed.inject(CommentsService);
    commentsStore = TestBed.inject(CommentsStore);
  });

  it('should be created', () => {
    expect(commentsService).toBeDefined();
  });

});
