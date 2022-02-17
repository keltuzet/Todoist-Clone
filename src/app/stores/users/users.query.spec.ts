import { UsersQuery } from './users.query';
import { UsersStore } from './users.store';

describe('UsersQuery', () => {
  let query: UsersQuery;

  beforeEach(() => {
    query = new UsersQuery(new UsersStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
