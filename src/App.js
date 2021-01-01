import React, { Component } from 'react';
import AddTask from './AddTask';
import DisplayTask from './DisplayTask';
import Firebase from "./firebase";
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
      ],
      task: '',
      login: true
    }
    if (Firebase.auth.currentUser === null) {
      this.state.login = false;
    }
  }


  componentDidMount() {
    const tasks = [...this.state.tasks]
    const firestore = Firebase.firestore;
    firestore.collection('tasks').get()
      .then(docs => {
        docs.forEach(doc => {
          tasks.push({ todo: doc.data().todo, id: doc.id })
        })
        this.setState({ tasks: tasks });
      })
      .catch(e => console.log(e));
  }

  onClickHandler = (e) => {
    e.preventDefault();
    const firestore = Firebase.firestore;
    firestore.collection('tasks').add({ todo: this.state.task })
      .then(r => {
        const tasks = [...this.state.tasks, { todo: this.state.task, id: r.id }];
        this.setState({ tasks, task: '' })
      })
  }

  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  onDeleteHandler = (id) => {
    const firestore = Firebase.firestore;
    firestore.collection('tasks').doc(id).delete()
      .then(() => {
        const tasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({ tasks });
      }
      )
  }

  onCheckLogin = () => {
    if (Firebase.auth.currentUser!=null) {
      this.setState({
        login:true
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.login ?
          <div>
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
          </div>
          : <Login login={this.onCheckLogin}></Login>
        }
      </div>
    );
  }
}

export default App;