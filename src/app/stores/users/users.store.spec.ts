import { UsersStore } from './users.store';

describe('UsersStore', () => {
  let store: UsersStore;

  beforeEach(() => {
    store = new UsersStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
