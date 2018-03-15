import { EventEmitter, Component, Output, ElementRef } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {
    @Output('taskCreated') taskCreated = new EventEmitter<Task>();

    busy = false;
    newTaskDesc = '';

    constructor(private taskService: TaskService) { }

    createTask() {
        this.busy = true;
        const newTask = new Task(this.newTaskDesc, false);

        this.taskService.createTask(newTask).subscribe(
            (data: Task) => {
                this.taskCreated.emit(data);
            },
            err => console.error(err),  // TODO handle error
              () => {
                  this.newTaskDesc = '';
                  this.busy = false;
              }
        );
    }
}
