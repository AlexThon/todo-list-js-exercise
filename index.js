
// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  return {
    title:title,
    description:description,
    complete: false,
    logState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completed() {
      this.complete = true;
    }

  };
};


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.completed();
task1.logState();



console.log(tasks);