import { StatusesStore } from './statuses.store';

describe('StatusesStore', () => {
  let store: StatusesStore;

  beforeEach(() => {
    store = new StatusesStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
