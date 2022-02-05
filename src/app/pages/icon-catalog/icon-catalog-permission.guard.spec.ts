import { TestBed } from '@angular/core/testing';

import { IconCatalogPermissionGuard } from './icon-catalog-permission.guard';

describe('IconCatalogPermissionGuard', () => {
  let guard: IconCatalogPermissionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IconCatalogPermissionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
