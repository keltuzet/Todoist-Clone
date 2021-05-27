import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-expansion-panel-header',
  templateUrl: './expansion-panel-header.component.html',
  styleUrls: ['./expansion-panel-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelHeaderComponent {
  public btnClick$ = new Subject<void>();
  public expand$: Observable<boolean>;
}
