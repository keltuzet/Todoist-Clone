import { CommentsQuery } from './comments.query';
import { CommentsStore } from './comments.store';

describe('CommentsQuery', () => {
  let query: CommentsQuery;

  beforeEach(() => {
    query = new CommentsQuery(new CommentsStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
