import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    getTasks() {
        return this.http.get('/api/tasks');
    }
}