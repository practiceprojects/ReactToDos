import React, { Component } from 'react';
import moment from 'moment';

class TodoListView extends Component{
    render(){
        const todoItems = this.props.todos.map(t => <li key={t.created}>{t.text} ({moment(t.created).fromNow()})</li>);
        return(
            <ol style={{width:200, margin:"0 auto"}}>
              {todoItems}
            </ol>
        )
    }
}

export default TodoListView;