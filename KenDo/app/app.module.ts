import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { TaskService } from './task.service';
import { TaskSortPipe } from './task-list/task-sort.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        CreateTaskComponent,
        TaskItemComponent,
        TaskSortPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        TaskService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
