// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 3
const task3Title = prompt("Enter task 3 title:");
const task3Description = prompt("Enter task 3 description:");
let task3Status = prompt(
  "Enter task 3 status (todo, doing, done):"
).toLowerCase();

while (
  task3Status !== "todo" &&
  task3Status !== "doing" &&
  task3Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task3Status = prompt(
    "Enter task 3 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// Check if task3 is done, and log it if so
if (task3Status === "done") {
  console.log("Title: " + task3Title + ", status: " + task3Status);
}

// If neither task1,task2 nor task3 is done, show a motivational message
if (
  task1Status !== "done" &&
  task2Status !== "done" &&
  task3Status !== "done"
) {
  console.log("No tasks completed, let's get to work!");
}

// Task log

const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// ID checker

let lastId;
if (initialTasks.length > 0) {
  lastId = initialTasks[initialTasks.length - 1].id;
} else {
  lastId = 0;
}

// New Task

let taskOne = {
  id: lastId + 1,
  title: task1Title,
  description: task1Description,
  status: task1Status,
};

initialTasks.push(taskOne);

// ID checker

if (initialTasks.length > 0) {
  lastId = initialTasks[initialTasks.length - 1].id;
} else {
  lastId = 0;
}

// New Task

let taskTwo = {
  id: lastId + 1,
  title: task2Title,
  description: task2Description,
  status: task2Status,
};

initialTasks.push(taskTwo);

// New Task

let taskThree = {
  id: lastId + 1,
  title: task3Title,
  description: task3Description,
  status: task3Status,
};

initialTasks.push(taskThree);

console.log(initialTasks);

if (initialTasks.length >= 6) {
  console.log(
    "There are enough tasks on your board, please check them in the console."
  );
}

// Filter tasks with status "done"
let completedTasks = initialTasks.filter(
  (initialTasks) => initialTasks.status === "done"
);

// Log completed tasks
console.log("Completed Tasks:", completedTasks);
