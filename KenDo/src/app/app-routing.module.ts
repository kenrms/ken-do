import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from "./myTask/task-list.component";

const routes: Routes = [
    {
        path: 'taskList',
        component: TaskListComponent
    },
    {
        path: 'MyTasks/Index',
        redirectTo: 'taskList'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }