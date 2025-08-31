// Simple To-Do List in Node.js

let todos = [];

function addTask(task) {
  todos.push(task);
  console.log(`✅ Task added: "${task}"`);
}

function listTasks() {
  console.log("\n📋 Your To-Do List:");
  if (todos.length === 0) {
    console.log("No tasks yet!");
  } else {
    todos.forEach((t, i) => console.log(`${i + 1}. ${t}`));
  }
}

function deleteTask(index) {
  if (index >= 0 && index < todos.length) {
    let removed = todos.splice(index, 1);
    console.log(`🗑️ Task deleted: "${removed}"`);
  } else {
    console.log("⚠️ Invalid task number");
  }
}

addTask("Learn JavaScript");
addTask("Complete Internship Task 2");
listTasks();
deleteTask(0);
listTasks();
