import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) { }

    getTasks() {
        return this.http.get('/api/tasks');
    }

    createTask(task: Task) {
        return this.http.post('/api/tasks', task);
    }
}