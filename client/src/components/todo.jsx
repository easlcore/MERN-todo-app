import React from 'react';
import axios from 'axios';

import { Input } from './input';
import { ListTodos } from './list-todos';

export class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get('/api/todos')
            .then(res => {
                if (res.data) {
                    this.setState({
                        todos: res.data
                    });
                }
            }).catch(err => console.log(err));
    }

    deleteTodo(id) {
        axios.delete(`/api/todos/${id}`)
            .then(res => {
                if (res.data) {
                    this.getTodos();
                }
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>My Todos</h1>
                <Input  getTodos={this.getTodos}/>
                <ListTodos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}
