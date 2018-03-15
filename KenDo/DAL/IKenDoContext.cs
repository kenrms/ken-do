using System;
using System.Data.Entity;
using KenDo.Models;

namespace KenDo.DAL
{
    public interface IKenDoContext : IDisposable
    {
        DbSet<MyTask> MyTasks { get; }
        int SaveChanges();
        void MarkAsModified(MyTask item);
    }
}