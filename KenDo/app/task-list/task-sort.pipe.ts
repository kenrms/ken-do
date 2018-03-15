import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task.model';

@Pipe({
    name: 'taskSort',
    pure: false
})
export class TaskSortPipe implements PipeTransform {
    transform(tasks: Task[], sortByCompleted: boolean): Task[] {
        tasks.sort((a: Task, b: Task) => {
            let aComplete = a.isComplete ? 1 : 0;
            let bComplete = b.isComplete ? 1 : 0;

            if (!sortByCompleted || aComplete === bComplete) {
                return b.id - a.id; // larger ID first
            } else {
                return aComplete - bComplete;
            }
        });

        return tasks;
    }
}