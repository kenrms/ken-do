import { Component, ViewChild, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    @ViewChild(TaskListComponent) private taskListComponent: TaskListComponent;
    loading = false;

    constructor(private taskService: TaskService) { }

    handleNewTask(task: Task) {
        this.taskListComponent.addTasks(new Array<Task>(task));
    }

    ngOnInit() {
        this.loading = true;

        this.taskService.getTasks().subscribe(
            (data: Task[]) => {
                this.taskListComponent.addTasks(data);
            },
            err => console.error(err),  // TODO handle error
            () => {
                this.loading = false;
            }
        );
    }
}
