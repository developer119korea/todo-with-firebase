import React, { Component } from 'react';
import AddTask from './AddTask';
import DisplayTask from './DisplayTask';

class App extends Component {
  state = {
    tasks: [
      { todo: '할일 1' },
      { todo: '할일 2' },
      { todo: '할일 3' },
      { todo: '할일 4' },
    ],
    task: ''
  }

  onClickHandler = (e) => {
    e.preventDefault();
    const task = { todo: this.state.task };
    const tasks = [...this.state.tasks, task]
    this.setState({
      tasks,
      task: ''
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  onDeleteHandler = (idx) => {
    const tasks = this.state.tasks.filter((task, i) => i !== idx)
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="App">
        <AddTask
          value={this.state.task}
          changeHandler={this.onChangeHandler}
          clickHandler={this.onClickHandler}
        />
        <div>
        <DisplayTask
          tasks={this.state.tasks}
          deleteHandler={this.onDeleteHandler}
        />
        </div>
      </div>
    );
  }
}

export default App;