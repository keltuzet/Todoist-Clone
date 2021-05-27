import { TestBed } from '@angular/core/testing';

import { ExpansionPanelService } from './expansion-panel.service';

describe('ExpansionPanelService', () => {
  let service: ExpansionPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpansionPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
