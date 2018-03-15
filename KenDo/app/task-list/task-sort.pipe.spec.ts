import { TaskSortPipe } from "./task-sort.pipe";
import { Task } from "../task.model";

describe('TaskSortPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskSortPipe();
    expect(pipe).toBeTruthy();
  });
  it('sorts the tasks by incomplete-first, then by desc ID',
    () => {
      const pipe = new TaskSortPipe();

      let demoTasks: Task[] = [
        new Task('1', true, 1),
        new Task('2', false, 2),
        new Task('3', true, 3),
        new Task('4', false, 4),
        new Task('5', true, 5)
      ];

      const sorted = pipe.transform(demoTasks, true);

      expect(sorted[0].id).toEqual(4);
      expect(sorted[4].id).toEqual(1);
    });
});
