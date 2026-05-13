const Task = require('../src/task');

Test('marks task as done', () => {
    const t = new Task('Buy Vegetables');
    t.markDone();
    expect(t.done).toBe(true);
});

test('remove task from list', () => {
    const t1 = new Task('Task 1');
    const t2 = new Task('Task 2');
    const tasks = [t1, t2];
    const updated = t1.remove(tasks);
    expect(updated).toEqual([t2]);
});

