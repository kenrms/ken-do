import { Component } from '@angular/core';
import { Task } from '../task.model'

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

    handleTaskDeleted(id: number) {
        let index = -1;
        for (let i = 0; i < this.tasks.length; i++) {
            if (id === this.tasks[i].id) {
                index = i;
                break;
            }
        }
        // makes sure we actually found it
        if (index >= 0) {
            this.tasks.splice(index, 1);
        }
    }
}