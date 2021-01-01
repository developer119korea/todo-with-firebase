import React, { Component } from 'react';
import AddTask from './AddTask';
import DisplayTask from './DisplayTask';

import { firestore } from "./firebase";

class App extends Component {
  state = {
    tasks: [
    ],
    task: ''
  }

  componentDidMount() {
    const tasks = [...this.state.tasks]
    firestore.collection('tasks').get()
      .then(docs => {
        docs.forEach(doc => {
          tasks.push({ todo: doc.data().todo, id: doc.id })
        })
        this.setState({ tasks: tasks });
      })
  }

  onClickHandler = (e) => {
    e.preventDefault();
    firestore.collection('tasks').add({todo:this.state.task})
    .then(r=>{
      const tasks = [...this.state.tasks, {todo:this.state.task, id:r.id}];
      this.setState({tasks, task:''})
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  onDeleteHandler = (id) => {
    firestore.collection('tasks').doc(id).delete()
      .then(() => {
        const tasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({ tasks });
      }
      )
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