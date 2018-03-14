import { Component, ViewChild, OnInit } from '@angular/core';
import { Task } from './task-list/task.model';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    @ViewChild(TaskListComponent) private taskListComponent: TaskListComponent;

    constructor(private taskService: TaskService) { }

    handleNewTask(task: Task) {
        this.taskListComponent.addTasks(new Array<Task>(task));
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe(
            data => {
                console.log(data);
                const tasks:Task[] = Object.keys(data).map(i => {
                    let t = data[i];
                    let task = new Task(t.Description, t.IsComplete);
                    return task;
                });
                this.taskListComponent.addTasks(tasks);
            },
            err => console.error(err),
            () => {}
        );
    }
}
