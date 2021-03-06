﻿using KenDo.DAL;
using KenDo.Models;
using System;
using System.Linq;
using System.Web.Http;

namespace KenDo.Controllers
{
    public class TasksController : ApiController
    {
        private readonly IKenDoContext _db = new KenDoContext();

        public TasksController() { }

        public TasksController(IKenDoContext context)
        {
            _db = context;
        }

        [Route("api/tasks")]
        [HttpGet]
        public IHttpActionResult GetTasks()
        {
            var tasks = _db.MyTasks.Select(t => new TaskDto
            {
                DateModified = t.DateModified,
                Description = t.Description,
                Id = t.ID,
                IsComplete = t.IsComplete
            }).ToArray();

            return Ok(tasks);
        }

        [Route("api/tasks/{id}/toggleComplete")]
        [HttpPost]
        public IHttpActionResult ToggleComplete(int id)
        {
            var task = _db.MyTasks.Find(id);
            if (task == null) return NotFound();

            task.IsComplete = !task.IsComplete;
            task.DateCompleted = task.IsComplete ? DateTime.Now : null as DateTime?;
            task.DateModified = DateTime.Now;

            _db.SaveChanges();

            return Ok(new TaskDto(task));
        }


        [Route("api/tasks")]
        [HttpPost]
        public IHttpActionResult CreateTask([FromBody]TaskDto task)
        {
            var taskDescription = task.Description;
            if (string.IsNullOrWhiteSpace(taskDescription))
                return BadRequest("No task description");

            var newTask = new MyTask
            {
                IsComplete = false,
                DateCompleted = null,
                DateModified = DateTime.Now,
                Description = taskDescription
            };

            var resultTask = _db.MyTasks.Add(newTask);
            _db.SaveChanges();

            return Ok(new TaskDto(resultTask));
        }

        [Route("api/tasks/{id}")]
        [HttpPut]
        public IHttpActionResult EditTask(int id, [FromBody]TaskDto value)
        {
            var task = _db.MyTasks.Find(id);
            if (task == null) return NotFound();

            // The only thing that really gets edited is the description
            task.Description = value.Description;
            task.DateModified = DateTime.Now;

            _db.MarkAsModified(task);

            _db.SaveChanges();
            return Ok(new TaskDto(task));
        }

        [Route("api/tasks/{id}")]
        [HttpDelete]
        public IHttpActionResult DeleteTask(int id)
        {
            var task = _db.MyTasks.Find(id);
            if (task == null) return NotFound();
            _db.MyTasks.Remove(task);
            _db.SaveChanges();
            return Ok();
        }
    }
}