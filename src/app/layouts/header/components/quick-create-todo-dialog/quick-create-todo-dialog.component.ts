import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { DialogRef } from '@features/dialog/dialog-ref';
import { TodosService, CreateTodo } from '@stores/todos';
import { Priority } from '@stores/priorities';
import { SnackbarService } from '@features/snackbar';

@Component({
  selector: 't-quick-create-todo-dialog',
  templateUrl: './quick-create-todo-dialog.component.html',
  styleUrls: ['./quick-create-todo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickCreateTodoDialogComponent {
  readonly form = this.fb.group({
    title: ['', Validators.required],
    description: [],
  });
  readonly formInvalid$ = this.form.statusChanges.pipe(
    startWith(this.form.invalid),
    map(() => this.form.invalid),
  );
  priority: Priority;
  tagIds: string[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: DialogRef<void>,
    private todosService: TodosService,
    private snackbarService: SnackbarService,
  ) {}

  addTask(): void {
    if (this.form.invalid) return;
    const formValue: Pick<CreateTodo, 'title' | 'description'> = this.form.value;
    this.todosService
      .create({
        ...formValue,
        createdDate: new Date().toJSON(),
        endDate: new Date().toJSON(),
        tagIds: this.tagIds,
        subTodoIds: [],
        commentsIds: [],
        priorityId: this.priority?.id,
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

  addReminder(): void {
    this.snackbarService.open({ data: { message: 'This feature is not yet available!' } });
  }
}
