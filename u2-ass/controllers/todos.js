var Todo = require('../models/todo');
module.exports = {
    index,
    saveTodo,
    newTodo
};

function index(req, res, next) {
    res.render('todos/index', {
        todos: Todo.getAll()
    });
}

function saveTodo(req, res){
    Todo.addNew(req.body)
    res.redirect('/todos')
}

function newTodo(req,res){
    res.render('todos/new')
}