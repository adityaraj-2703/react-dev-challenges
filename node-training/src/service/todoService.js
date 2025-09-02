// services/todoService.js
const shortid = require("shortid");
const { todoRepo } = require("../repository/todoRepository");


// list
const getAllTodos = async () => {
  return todoRepo.getAllTodos();
};

// get
const getTodoById = async (id) => {
  const todo = todoRepo.getTodoById(id);
  if (!todo) throw new Error("Todo not found");
  return todo;
};

// create
const createTodo = async ({ title, description = "" }) => {
  if (!title) throw new Error("title is required");

  const newTodo  = {
    id: shortid.generate(),
    title,
    description,
    completed: false,
  };
  todoRepo.createTodo(newTodo);
  return newTodo;
};

// delete
const deleteTodo = async (id) => {
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) throw new Error("Todo not found");
  const removed = await todoRepo.deleteTodo(id);
  return { id: removed.id };
};

// update (partial)
const updateTodo = async (id, { title, description, completed }) => {
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) throw new Error("Todo not found");

  const existing = todos[idx];
  const updated = {
    ...existing,
    title: title ?? existing.title,
    description: description ?? existing.description,
    completed: completed ?? existing.completed,
  };
  todos[idx] = updated;
  return updated;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo,
};
