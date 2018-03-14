using System;

namespace KenDo.Models
{
    public class TaskDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public bool IsComplete { get; set; }
        public DateTime DateModified { get; set; }

        public TaskDto() { }

        public TaskDto(MyTask t)
        {
            Id = t.ID;
            Description = t.Description;
            IsComplete = t.IsComplete;
            DateModified = t.DateModified;
        }
    }
}