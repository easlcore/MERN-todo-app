import React from 'react';

export const ListTodos = ({ todos, deleteTodo }) => (
    <ul>
        {todos && todos.length ?
            todos.map(todo => (
                <li key={todo._id} onClick={() => deleteTodo(todo._id)}>
                    {todo.action}
                </li>
            )) :
            <li>No todos left</li>
        }
    </ul>
);
