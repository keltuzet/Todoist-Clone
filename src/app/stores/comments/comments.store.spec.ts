import { CommentsStore } from './comments.store';

describe('CommentsStore', () => {
  let store: CommentsStore;

  beforeEach(() => {
    store = new CommentsStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
