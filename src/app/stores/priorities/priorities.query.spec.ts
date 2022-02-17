import { PrioritiesQuery } from './priorities.query';
import { PrioritiesStore } from './priorities.store';

describe('PrioritiesQuery', () => {
  let query: PrioritiesQuery;

  beforeEach(() => {
    query = new PrioritiesQuery(new PrioritiesStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
