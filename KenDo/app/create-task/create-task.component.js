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
var task_model_1 = require("../task-list/task.model");
var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent() {
        this.taskCreated = new core_1.EventEmitter();
        this.busy = false;
        this.newTaskDesc = '';
    }
    CreateTaskComponent.prototype.createTask = function () {
        this.busy = true;
        // TODO call api to create
        var newTask = new task_model_1.Task(this.newTaskDesc, false);
        // emit event now that we're done; TODO replace null arg with resultant Task
        this.taskCreated.emit(newTask);
        this.newTaskDesc = '';
        this.busy = false;
    };
    __decorate([
        core_1.Output('taskCreated'),
        __metadata("design:type", Object)
    ], CreateTaskComponent.prototype, "taskCreated", void 0);
    CreateTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-create-task',
            templateUrl: './create-task.component.html'
        })
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());
exports.CreateTaskComponent = CreateTaskComponent;
//# sourceMappingURL=create-task.component.js.map