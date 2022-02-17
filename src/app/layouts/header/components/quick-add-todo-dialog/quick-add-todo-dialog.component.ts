import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { map, startWith, take } from 'rxjs/operators';

import { DialogRef } from '@features/dialog/dialog-ref';
import { Todo } from '@stores/todos';
import { TodosService } from '@stores/todos';

@Component({
  selector: 't-quick-add-todo-dialog',
  templateUrl: './quick-add-todo-dialog.component.html',
  styleUrls: ['./quick-add-todo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickAddTodoDialogComponent {
  readonly form = this.fb.group({
    title: ['', Validators.required],
    description: [],
  });

  readonly formInvalid$ = this.form.statusChanges.pipe(
    startWith(this.form.invalid),
    map(() => this.form.invalid),
  );

  constructor(private fb: FormBuilder, private dialogRef: DialogRef<void>, private todosService: TodosService) {}

  addTask(): void {
    if (this.form.invalid) return;
    const formValue: Pick<Todo, 'title' | 'description'> = this.form.value;
    this.todosService
      .create({
        ...formValue,
        createdDate: new Date().toJSON(),
        endDate: new Date().toJSON(),
        subTodoIds: [],
        tagIds: [],
        commentsIds: [],
      })
      .subscribe();
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  focusNextField(event: KeyboardEvent): void {
    if (event.key !== 'Enter') return;
    const sibling = (event.target as HTMLElement).nextElementSibling as HTMLInputElement;
    sibling.focus();
    event.preventDefault();
  }
}
