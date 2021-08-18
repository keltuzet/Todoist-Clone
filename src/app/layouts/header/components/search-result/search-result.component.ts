import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SearchResult } from '../search-bar/search.model';

@Component({
  selector: 't-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent {
  @Input() result: SearchResult;
  @Input() indicateMatch = true;
}
