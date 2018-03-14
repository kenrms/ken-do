import { Component } from '@angular/core';
import { Task } from './task.model'

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {
    tasks: Task[] = [
        new Task('Do laundry', true),
        new Task('Panic', false)
    ];

    onTaskAdded(task: Task) {
        this.tasks.push(task);
    }
}