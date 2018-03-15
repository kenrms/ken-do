using System;
using System.Collections.Generic;

namespace KenDo.Models
{
    public class MyTask
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public bool IsComplete { get; set; }
        public DateTime DateModified { get; set; }
        public DateTime? DateCompleted { get; set; }

        public static List<MyTask> GenerateSampleData()
        {
            return new List<MyTask>
                {
                    new MyTask{ID=1, Description="Do the laundry", DateModified=DateTime.Parse("2018-03-10"), IsComplete=true, DateCompleted=DateTime.Parse("2018-03-11")},
                    new MyTask{ID=2, Description="Start a cult", DateModified=DateTime.Parse("2018-01-01")},
                    new MyTask{ID=3, Description="Take cat to the vet", DateModified=DateTime.Parse("2018-03-12")},
                    new MyTask{ID=4, Description="Finish this dang project", DateModified=DateTime.Parse("2018-01-01"), DateCompleted=DateTime.Parse("2018-03-15"), IsComplete = true}
                };
        }
    }
}