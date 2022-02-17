import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { StatusesStore, StatusesState } from './statuses.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'statuses' })
export class StatusesService extends CollectionService<StatusesState> {
  constructor(private statusesStore: StatusesStore, private http: HttpClient) {
    super(statusesStore);
  }
}
