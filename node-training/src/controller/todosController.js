const todoService = require("../service/todoService");


const getAllTodos = async (req, res, next) => {
  try {
    const data = await todoService.getAllTodos();
    res.json(data);
  } catch (err) { next(err); }
};

const getTodoById = async (req, res, next) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    res.json(todo);
  } catch (err) {
    if (err.message === "Todo not found") return res.status(404).json({ message: err.message });
    next(err);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const created = await todoService.createTodo(req.body || {});
    res.status(201).json(created);
  } catch (err) {
    if (err.message.includes("required")) return res.status(400).json({ message: err.message });
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const result = await todoService.deleteTodo(req.params.id);
    res.json({ message: `Todo with id ${req.params.id} deleted successfully` });
  } catch (err) {
    if (err.message === "Todo not found") return res.status(404).json({ message: err.message });
    next(err);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const updated = await todoService.updateTodo(req.params.id, req.body || {});
    res.json(updated);
  } catch (err) {
    if (err.message === "Todo not found") return res.status(404).json({ message: err.message });
    next(err);
  }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodo
};

