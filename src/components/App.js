import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello TODO</h2>
        <TodoList title="test" />
      </div>
    );
  }
}

export default App;
