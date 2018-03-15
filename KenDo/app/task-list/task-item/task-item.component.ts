import { Component, Input } from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
    @Input() task: Task;
    isEditing: boolean;
    isBusy: boolean;
    private oldDesc = '';

    constructor(private taskService: TaskService) { }

    onBlur(event: FocusEvent) {
        // inavlid if it's empty
        if (this.task.description.length === 0) {
            // so restore the old description
            this.task.description = this.oldDesc;
        }
        // Only save if the description's been changed
        else if (this.oldDesc !== this.task.description) {
            this.doSave();
        }
    }

    onFocus(event: FocusEvent) {
        if (!this.isBusy) {
            this.startEditing();
        }
    }

    doSave() {
        this.isBusy = true;

        this.taskService.editTask(this.task).subscribe(
            (data: Task) => {
                this.task = data;
            },
            err => console.error(err),   // TODO handle error
            () => {
                this.isBusy = false;
            });
    }

    startEditing() {
        this.oldDesc = this.task.description;
    }


    // TODO use api
    markComplete() {
        this.task.isComplete = true;
    }

    toggleComplete() {
        this.task.isComplete = !this.task.isComplete;
    }
}