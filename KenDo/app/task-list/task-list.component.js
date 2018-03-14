"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent() {
        this.tasks = [];
    }
    TaskListComponent.prototype.onTaskAdded = function (task) {
        this.tasks.push(task);
    };
    // There's probably a better way to do this
    TaskListComponent.prototype.showingAnyTasks = function () {
        if (this.hideCompleted) {
            for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
                var t = _a[_i];
                if (!t.isComplete) {
                    return true;
                }
            }
            return false;
        }
        else {
            return (this.tasks && this.tasks.length > 0);
        }
    };
    TaskListComponent.prototype.addTasks = function (tasks) {
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var t = tasks_1[_i];
            this.tasks.unshift(t);
        }
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'app-task-list',
            templateUrl: './task-list.component.html'
        })
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map