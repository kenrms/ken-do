import { EventEmitter, Component, Output } from '@angular/core';
import { Task } from '../task-list/task.model';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {
    @Output('taskCreated') taskCreated = new EventEmitter<Task>();

    busy = false;
    newTaskDesc = '';

    createTask() {
        this.busy = true;

        // TODO call api to create
        const newTask = new Task(this.newTaskDesc, false);

        // emit event now that we're done; TODO replace null arg with resultant Task
        this.taskCreated.emit(newTask);
        this.newTaskDesc = '';

        this.busy = false;
    }
}