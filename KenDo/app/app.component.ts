import { Component, ViewChild } from '@angular/core';
import { Task } from './task-list/task.model';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild(TaskListComponent) private taskListComponent: TaskListComponent;

    handleNewTask(task: Task) {
        this.taskListComponent.addNewTask(task);
    }
}
