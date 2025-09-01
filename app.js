const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let todos = [];

// Add a task
app.post("/todos", (req, res) => {
  const { task } = req.body;
  todos.push(task);
  res.json({ message: `✅ Task added: "${task}"`, todos });
});

// List tasks
app.get("/todos", (req, res) => {
  res.json({ todos });
});

// Delete task by index
app.delete("/todos/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < todos.length) {
    const removed = todos.splice(index, 1);
    res.json({ message: `🗑️ Task deleted: "${removed}"`, todos });
  } else {
    res.status(400).json({ error: "⚠️ Invalid task number" });
  }
});

app.listen(port, () => {
  console.log(`To-Do API running on http://localhost:${port}`);
});
