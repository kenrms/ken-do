using KenDo.Models;
using System.Data.Entity;

namespace KenDo.DAL
{
    public class KenDoContext : DbContext, IKenDoContext
    {
        public KenDoContext() : base("KenDoContext")
        {

        }

        public DbSet<MyTask> MyTasks { get; set; }

        public void MarkAsModified(MyTask item)
        {
            Entry(item).State = EntityState.Modified;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}