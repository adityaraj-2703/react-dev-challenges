const { Router } = require("express");
const { getAllTodos, getTodoById, createTodo, deleteTodo, updateTodo } = require("../controller/todosController");

const todosRouter = Router();






// todosRouter.get('/', (req, res) => {
//   res.send({
//   "userId": 1,
//   "id": shortid.generate(),
//   "title": "delectus aut autem",
//   "completed": false
// })
// })

//read all todos
todosRouter.get('/', getAllTodos);

//read a todo by id
todosRouter.get('/:id', getTodoById);

//create a new todo
todosRouter.post('/', createTodo);

//delete a todo
todosRouter.delete('/:id', deleteTodo);
//update a todo
todosRouter.put('/:id', updateTodo);

module.exports = todosRouter;