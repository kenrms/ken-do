import { Component } from '@angular/core';
import { Task } from './task.model'

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {
    hideCompleted: boolean;

    tasks: Task[] = [];

    onTaskAdded(task: Task) {
        this.tasks.push(task);
    }

    // There's probably a better way to do this
    showingAnyTasks(): boolean {
        if (this.hideCompleted) {
            for (let t of this.tasks) {
                if (!t.isComplete) {
                    return true;
                }
            }
            return false;
        } else {
            return (this.tasks && this.tasks.length > 0);
        }
    }

    addTasks(tasks: Task[]) {
        for (let t of tasks) {
            this.tasks.unshift(t);
        }
    }
}