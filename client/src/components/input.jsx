import React from 'react';
import axios from 'axios';

export class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            action: ''
        };
    }

    addTodo = () => {
        const task = {
            action: this.state.action
        };

        if (task.action && task.action.length) {
            axios.post('/api/todos', task)
                .then(res => {
                    if (res.data) {
                        this.props.getTodos();
                        this.setState({ action: ''});
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.log('input field required');
        }
    }

    handleChange = (e) => {
        this.setState({ action: e.target.value });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.action}
                />
                <button onClick={this.addTodo}>
                    add todo
                </button>
            </div>
        );
    }
}
