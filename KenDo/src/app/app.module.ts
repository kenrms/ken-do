import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskListComponent } from './myTask/task-list.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [AppComponent, TaskListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
