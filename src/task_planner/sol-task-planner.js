"use strict";

function createTaskPlanner() {
  let tasks = [];

  const addTask = (task) => tasks.push({ ...task, completed: false });
  const removeTask = (value) => tasks = tasks
    .filter(task => !(task.id == value || task.name == value));
  const getTasks = () => tasks;
  const getPendingTasks = () => tasks.filter(task => !task.completed);
  const getCompletedTasks = () => tasks.filter(task => task.completed);
  const markTaskAsCompleted = (value) => tasks
    .find(task => (task.id === value || task.name === value)).completed = true;
  const getSortedTasksByPriority = () => [...tasks].sort((a, b) => a.priority - b.priority);
  const filterTasksByTag = (tag) => tasks
    .filter(task => task.tags.find(_tag => _tag === tag));
  const updateTask = (taskId, updates) => {
    let idx = tasks.findIndex(task => task.id === taskId)
    tasks[idx] = { ...tasks[idx], ...updates }
  }

  return {
    addTask,
    removeTask,
    getTasks,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask,
  }
}

let planner = createTaskPlanner();
// planner.addTask({
//   id: 1,
//   name: "Comprar leche",
//   priority: 3,
//   tags: ["shopping", "home"]
// });
// planner.addTask({
//   id: 2,
//   name: "Llamar a Juan",
//   priority: 1,
//   tags: ["personal"]
// });

// console.log("Tasks:", planner.getTasks());
// console.log("Tasks ordered:", planner.getSortedTasksByPriority());
// console.log("Tasks:", planner.getTasks());

// planner.markTaskAsCompleted("Llamar a Juan");
// console.log("Tasks:", planner.getTasks());
// console.log(planner.getCompletedTasks());


planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

console.log(planner.filterTasksByTag("shopping"));
console.log(planner.updateTask(2, {tags: ["personal", "home"]}));
console.log(planner.filterTasksByTag("home"))