using KenDo.DAL;
using KenDo.Models;
using System;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace KenDo.Controllers
{
    /// <summary>
    /// Only used by MVC version
    /// </summary>
    public class MyTasksController : Controller
    {
        private KenDoContext db = new KenDoContext();

        // GET: MyTasks
        public ActionResult Index()
        {
            return View(db.MyTasks.ToList());
        }

        // GET: MyTasks/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MyTask myTask = db.MyTasks.Find(id);
            if (myTask == null)
            {
                return HttpNotFound();
            }
            return View(myTask);
        }

        // GET: MyTasks/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MyTasks/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Description")] MyTask myTask)
        {
            if (ModelState.IsValid)
            {
                myTask.DateModified = DateTime.Now;
                db.MyTasks.Add(myTask);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(myTask);
        }

        // GET: MyTasks/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MyTask myTask = db.MyTasks.Find(id);
            if (myTask == null)
            {
                return HttpNotFound();
            }
            return View(myTask);
        }

        // POST: MyTasks/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Description,IsComplete,DateModified,DateCompleted")] MyTask myTask)
        {
            if (ModelState.IsValid)
            {
                myTask.DateModified = DateTime.Now;
                db.Entry(myTask).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(myTask);
        }

        // GET: MyTasks/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MyTask myTask = db.MyTasks.Find(id);
            if (myTask == null)
            {
                return HttpNotFound();
            }
            return View(myTask);
        }

        // POST: MyTasks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            MyTask myTask = db.MyTasks.Find(id);
            db.MyTasks.Remove(myTask);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        // GET: MyTasks/ToggleComplete/5
        public ActionResult ToggleComplete(int id)
        {
            var myTask = db.MyTasks.Find(id);
            if (myTask == null) return HttpNotFound();

            myTask.IsComplete = !myTask.IsComplete;
            myTask.DateCompleted = myTask.IsComplete ? DateTime.Now : (DateTime?)null;

            db.SaveChanges();

            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
