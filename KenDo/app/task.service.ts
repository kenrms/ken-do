﻿import { Injectable } from '@angular/core';
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

    editTask(task: Task) {
        return this.http.put(`/api/tasks/${task.id}`, task);
    }

    toggleComplete(id: number) {
        return this.http.post(`/api/tasks/${id}/toggleComplete`, null);
    }

    deleteTask(id: any): any {
        return this.http.delete(`/api/tasks/${id}`);
    }
}