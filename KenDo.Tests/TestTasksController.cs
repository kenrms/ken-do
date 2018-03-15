using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Results;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using KenDo.Controllers;
using KenDo.Models;

namespace KenDo.Tests
{
    [TestClass]
    public class TestTasksController
    {
        [TestMethod]
        public void GetTasks_ShouldReturnAllTasks()
        {
            var context = new TestKenDoContext();
            var sampleTasks = MyTask.GenerateSampleData();
            foreach (var t in sampleTasks)
            {
                context.MyTasks.Add(t);
            }

            var controller = new TasksController(context);
            var result = controller.GetTasks() as OkNegotiatedContentResult<TaskDto[]>;

            Assert.IsNotNull(result);
            Assert.AreEqual(sampleTasks.Count, result.Content.Length);
        }

        [TestMethod]
        public void ToggleComplete_ShouldToggleComplete()
        {
            var context = new TestKenDoContext();
            var demoTask = GetDemoTask();
            var oldState = demoTask.IsComplete;
            context.MyTasks.Add(demoTask);

            var controller = new TasksController(context);
            var result = controller.ToggleComplete(demoTask.ID) as OkNegotiatedContentResult<TaskDto>;

            Assert.IsNotNull(result);
            Assert.AreNotEqual(oldState, result.Content.IsComplete);
        }

        [TestMethod]
        public void CreateTask_ShouldCreateTask()
        {
            var controller = new TasksController(new TestKenDoContext());
            var newTaskDto = new TaskDto { Description = "Create a dang task" };

            var result = controller.CreateTask(newTaskDto) as OkNegotiatedContentResult<TaskDto>;

            Assert.IsNotNull(result);
            Assert.AreEqual(newTaskDto.Description, result.Content.Description);
        }

        [TestMethod]
        public void EditTask_ShouldEditTask()
        {
            var demoTask = GetDemoTask();
            var context = new TestKenDoContext();
            context.MyTasks.Add(demoTask);
            var controller = new TasksController(context);
            var newTaskDto = new TaskDto { Description = "Edit a dang task" };

            var result = controller.EditTask(demoTask.ID, newTaskDto) as OkNegotiatedContentResult<TaskDto>;

            Assert.IsNotNull(result);
            Assert.AreEqual(newTaskDto.Description, result.Content.Description);
        }

        [TestMethod]
        public void DeleteTask_ShouldDeleteTask()
        {
            var demoTask = GetDemoTask();
            var context = new TestKenDoContext();
            context.MyTasks.Add(demoTask);
            var controller = new TasksController(context);
            var result = controller.DeleteTask(demoTask.ID) as OkResult;

            Assert.IsNotNull(result);
        }

        private MyTask GetDemoTask()
        {
            return new MyTask
            {
                IsComplete = false,
                Description = "Demo a dang task",
                ID = 77,
                DateModified = DateTime.Parse("2018-03-10"),
                DateCompleted = null
            };
        }
    }
}