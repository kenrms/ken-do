using System.Linq;
using KenDo.Models;

namespace KenDo.Tests
{
    class TestMyTaskDbSet : TestDbSet<MyTask>
    {
        public override MyTask Find(params object[] keyValues)
        {
            return this.SingleOrDefault(t => t.ID == (int)keyValues.Single());
        }
    }
}