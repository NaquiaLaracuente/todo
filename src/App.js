import React from 'react';
import './App.css';
import Todo from './components/Todo';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    }
  }

  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });    
  }

  handleChange(e){
    this.setState({ newTodoDescription: e.target.value })
  }

  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
        { this.state.todos.map( (todo, index) => 
            <Todo key={ index } 
            description={todo.description} 
            isCompleted={todo.isCompleted}
            toggleComplete={() => this.toggleComplete(index)}/>
          )}
          <form onSubmit={ (e) => this.handleSubmit(e)}>
          <input type="text" value={ this.state.newTodoDescription } onChange={(e) => this.handleChange(e)}/>
          <input type="submit" />
         </form>
      </div> 
    );
  }
}


export default App;
