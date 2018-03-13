using System;

namespace KenDo.Models
{
    public class MyTask
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public bool IsComplete { get; set; }
        public DateTime DateModified { get; set; }
        public DateTime? DateCompleted { get; set; }
    }
}