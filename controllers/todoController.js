//importing the Todo model from todo.js inside models
const Todo = require("../models/todo");

//todoController object
const todoController = {
  createTodo: async (req, res) => {
    try {
      // get the description from the request body
      const { description } = req.body;

      // create a new todo
      const newTodo = new Todo({
        description,
      });

      // save the todo to the database
      const savedTodo = await newTodo.save();

      // send the saved todo as a response
      res.send({ message: "Todo created successfully", todo: savedTodo });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  getTodos: async (req, res) => {
    try {
      //moved to logger.js inside the utils directory
      // console.log(req.query);
      // console.log(req.method);
      // console.log(req.url);
      // console.log(req.params);
      // console.log(req.body);

      //dummy send to req
      //res.send({ message: "All Todos" });
      //Todo: model name
      const todos = await Todo.find({}, { __v: 0 });
      res.status(200).send({ message: "Todos fetched successfully!", todos });
    //   res.send(todos);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};

//export the todoController object
module.exports = todoController;
