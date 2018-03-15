import { Component, Input } from '@angular/core';
import { Task } from '../../task.model';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
    @Input() task: Task;

    // TODO functionality to bring up editing
    makeEditable() {
        
    }

    submitEdit() {
        
    }

    markComplete() {
        this.task.isComplete = true;
    }

    toggleComplete() {
        this.task.isComplete = !this.task.isComplete;
    }
}