import React, { Component } from 'react';
import AddToDo from './components/AddToDo/AddToDo';
import TodoItems from './components/TodoItems/TodoItems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <AddToDo />
        <TodoItems />
      </div>
    );
  }
}

export default App;



