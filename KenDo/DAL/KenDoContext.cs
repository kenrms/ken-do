using KenDo.Models;
using System.Data.Entity;

namespace KenDo.DAL
{
    public class KenDoContext : DbContext
    {
        public KenDoContext() : base("KenDoContext")
        {

        }

        public DbSet<MyTask> MyTasks { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}