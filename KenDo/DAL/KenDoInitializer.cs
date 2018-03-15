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
            var tasks = MyTask.GenerateSampleData();

            tasks.ForEach(t => context.MyTasks.Add(t));
            context.SaveChanges();
        }
    }
}