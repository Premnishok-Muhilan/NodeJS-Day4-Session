//importing the Todo model from todo.js inside models
const Todo = require('../models/todo');

//todoController object
const todoController = {
    createTodo: async (req, res) => {
        try {
            // get the description from the request body
            const { description } = req.body;

            // create a new todo
            const newTodo = new Todo({
                description
            });

            // save the todo to the database
            const savedTodo = await newTodo.save();

            // send the saved todo as a response
            res.send({ message: 'Todo created successfully', todo: savedTodo });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
}

//export the todoController object
module.exports = todoController;