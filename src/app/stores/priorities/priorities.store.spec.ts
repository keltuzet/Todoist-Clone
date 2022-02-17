import { PrioritiesStore } from './priorities.store';

describe('PrioritiesStore', () => {
  let store: PrioritiesStore;

  beforeEach(() => {
    store = new PrioritiesStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
