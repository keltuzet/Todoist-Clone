import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { TodosQuery } from '@stores/todos';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';

@Component({
  selector: 't-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodaysComponent {
  today = new Date();
  sortMenu = SortMenuComponent;
  todays$ = this.todosQuery.selectTodays(this.today);
  overdue$ = this.todosQuery.selectOverdue().pipe().subscribe();

  @ViewChild('header', { read: ElementRef }) header: ElementRef<HTMLDivElement>;

  constructor(private todosQuery: TodosQuery) {}

  /**
   * Add scroll event to blacklist
   */
  @HostListener('scroll', ['$event']) onScroll(event): void {
    if (event.target.scrollTop < 25) {
      this.header.nativeElement.style.borderBottom = '';
      return;
    }
    if (event.target.scrollTop > 25) {
      this.header.nativeElement.style.borderBottom = '1px solid #f0f0f0';
      return;
    }
  }
}
