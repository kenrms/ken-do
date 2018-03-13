using KenDo.Models;
using System;
using System.Collections.Generic;

namespace KenDo.DAL
{
    public class KenDoInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<KenDoContext>
    {
        /// <summary>
        /// Initialize db with some test data
        /// </summary>
        /// <param name="context"></param>
        protected override void Seed(KenDoContext context)
        {
            var tasks = new List<MyTask>
            {
                new MyTask{ID=1, Description="Do the laundry", DateModified=DateTime.Parse("2018-03-10"), IsComplete=true, DateCompleted=DateTime.Parse("2018-03-11")},
                new MyTask{ID=2, Description="Start a revolution", DateModified=DateTime.Parse("2018-01-01")}
            };

            tasks.ForEach(t => context.MyTasks.Add(t));
            context.SaveChanges();
        }
    }
}