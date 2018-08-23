import React, { Component } from 'react';

import moment from 'moment';
import TodoListView from './TodoListView';

class TodoEditor extends Component{
    constructor(){
        super();
        this.state = {
            itemToAdd: "Test",
            todos: []
        };
    }
    handleChange = (event) => {
      this.setState({itemToAdd: event.target.value})
    }
    handleAdd = () => {
        const newTodos = this.state.todos.slice();
        const newTodo = {
            text: this.state.itemToAdd,
            created: new Date()
        };
        newTodos.push(newTodo);
        this.setState({
          itemToAdd: "",
          todos : newTodos
        });
    }
    render(){
        console.log(moment().fromNow())
        return(
            <div>
            <input 
            type="text" 
            value={this.state.itemToAdd}
            onChange={this.handleChange}
            />
            <button onClick={this.handleAdd}>Add</button>
            <TodoListView todos = {this.state.todos}/>
          </div>
        );
    }
}

export default TodoEditor;