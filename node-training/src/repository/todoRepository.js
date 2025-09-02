const shortid = require("shortid");

const todos = [
  { userId: 1, id: shortid.generate(), title: "delectus aut autem", completed: false },
  { userId: 1, id: shortid.generate(), title: "quis ut nam facilis et officia qui", completed: false },
  { userId: 1, id: shortid.generate(), title: "fugiat veniam minus", completed: false },
];

const getTodos = async () => todos;

const getTodoById = async (id) => {
    return todos.find(t => t.id === id);
}

const createTodo = async (todo) => {
  todos.push(todo);
};

const updateTodo = async (id, updatedTodo) => {
  todos = todos.map(t => t.id === id ? { ...t, ...updatedTodo } : t);   
    return todos.find(t => t.id === id);
};

const deleteTodo = async (id) => {
  const toDelete =  todos.find(t => t.id === id);
  todos = todos.filter(t => t.id !== id);
  return toDelete;
};

module.exports = {
  getTodos, 
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,


};