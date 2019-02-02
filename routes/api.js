const express = require('express');
const { Todo } = require('../models/todo');

const router = express.Router();

router.get('/todos', async (req, res, next) => {
    try {
        const data = await Todo.find({}).select('_id action');
        res.json(data);
    } catch (error) {
        console.log('Some error happend when trying get todos: ', error);
        next();
    }

});

router.post('/todos', async (req, res, next) => {
    if (req.body.action) {
        try {
            const todo = await Todo.create(req.body);
            res.json(todo);
        } catch (error) {
            console.log('Some error happend when trying post todo: ', error);
            next();
        }
    } else {
        res.json({
            error: 'The input field is empty'
        });
    }
});

router.delete('/todos/:id', async (req, res, next) => {
    try {
        const data = await Todo.findByIdAndDelete({ _id: req.params.id });
        res.json(data);
    } catch (error) {
        console.log('Some error happend when trying delete todo: ', error);
        next();
    }
});

module.exports.router = router;
