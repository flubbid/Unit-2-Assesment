var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')


router.get('/', todosCtrl.index);
router.post('/', todosCtrl.saveTodo)
router.get('/new', todosCtrl.newTodo)


module.exports = router;
