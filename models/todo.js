const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
});

const Todo = mongoose.model('todo', TodoSchema, 'TodosCollection');

module.exports.Todo = Todo;
