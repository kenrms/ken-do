using System;
using System.Linq;
using System.Web.Http;
using KenDo.DAL;
using KenDo.Models;

namespace KenDo.Controllers
{
    public class TasksController : ApiController
    {
        private readonly KenDoContext _db = new KenDoContext();

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

            // TODO handle error

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
            //task.DateModified = DateTime.Now; // Don't update this for now, since we want to preserve order by date at the moment

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