import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AuthQuery } from '@auth/stores';
import { CommentsQuery } from '@stores/comments';
import { MeQuery } from '@stores/me';
import { PrioritiesQuery } from '@stores/priorities/priorities.query';
import { PrioritiesService } from '@stores/priorities/priorities.service';
import { ProjectsQuery } from '@stores/projects';
import { TagsQuery } from '@stores/tags';

import { TodosQuery } from '@stores/todos';
import { UsersQuery } from '@stores/users/users.query';
import { UsersService } from '@stores/users/users.service';
import { Timestamp } from 'firebase/firestore';
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

  constructor(
    private todosQuery: TodosQuery,
    private user: UsersQuery,
    private usersService: UsersService,
    private p: PrioritiesService,
    private pq: PrioritiesQuery,
    private t: TagsQuery,
    private pr: ProjectsQuery,
    private to: TodosQuery,
    private auth: AuthQuery,
    private meQuery: MeQuery,
    private commentsQuery: CommentsQuery,
  ) {
    // meQuery.myId$.subscribe(v => console.log(v));
    // commentsQuery.selectAll().subscribe(v => console.log(v));
    // to.selectAll().subscribe(v => console.log(v));
    // auth.select().subscribe(v => console.log(v));
    // to.selectAll().subscribe(v => console.log(v));
    // p.syncCollection().subscribe();
    // pq.selectAll().subscribe(v => console.log(v));
    // usersService.syncCollection().subscribe();
    // user.selectAll().subscribe(v => console.log(v));
  }

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
