"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_model_1 = require("./task-list/task.model");
var task_list_component_1 = require("./task-list/task-list.component");
var task_service_1 = require("./task.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
    }
    AppComponent.prototype.handleNewTask = function (task) {
        this.taskListComponent.addTasks(new Array(task));
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (data) {
            console.log(data);
            var tasks = Object.keys(data).map(function (i) {
                var t = data[i];
                var task = new task_model_1.Task(t.Description, t.IsComplete);
                return task;
            });
            _this.taskListComponent.addTasks(tasks);
        }, function (err) { return console.error(err); }, function () { });
    };
    __decorate([
        core_1.ViewChild(task_list_component_1.TaskListComponent),
        __metadata("design:type", task_list_component_1.TaskListComponent)
    ], AppComponent.prototype, "taskListComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map