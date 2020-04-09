import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
          <li>
            <input type="checkbox" 
            defaultChecked={ this.props.isCompleted } 
            onChange={this.props.toggleComplete}/>
            <span>{ this.props.description }</span>
          </li>
        )
    }
}

export default Todo;