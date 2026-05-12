function Task(description) {
    this.description = description;
    this.done = false;
    console.log(`Task created: ${this.description} (done: ${this.done})`);
}

Task.prototype.markDone = function() {
    this.done = true;
    console.log(`Task marked done: ${this.description}`);
};

Task.prototype.remove = function(tasks) {
    console.log(`Removing task: ${this.description} from list`);
}

const updateedTask = task.filter(t=>t !== this);
console.log(`Remaining tasks: ${updateedTask.map(t => t.description).join(', ') || 'No tasks left'}`);
return updateedTask;

module.exports = Task;
    



