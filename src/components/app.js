import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

import Logo from '../images/logo_1.png';

const todos = [
    {
        task: 'Pink flamingo pool floatie',
        isCompleted: false
    },
    {
        task: 'Donut pool floatie',
        isCompleted: true
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div className="content">
                <div className="header">
                    <img src={Logo} />
                </div>
                <div className="main">
                    <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                    <TodosList
                        todos={this.state.todos}
                        toggleTask={this.toggleTask.bind(this)}
                        saveTask={this.saveTask.bind(this)}
                        deleteTask={this.deleteTask.bind(this)}
                    />
                </div>
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}
