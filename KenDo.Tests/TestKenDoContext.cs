using System.Data.Entity;
using KenDo.DAL;
using KenDo.Models;

namespace KenDo.Tests
{
    public class TestKenDoContext : IKenDoContext
    {
        public TestKenDoContext()
        {
            MyTasks = new TestMyTaskDbSet();
        }

        public DbSet<MyTask> MyTasks { get; }

        public int SaveChanges()
        {
            return 0;
        }

        public void MarkAsModified(MyTask item) { }
        public void Dispose() { }
    }
}
