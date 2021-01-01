import React from 'react';

const DisplayTask = ({ tasks, deleteHandler}) => {
  return (
      tasks.map((task) => {
      return (
        <div key={task.id}>
          <p>{task.todo}</p>
          <button onClick={() => deleteHandler(task.id)}>삭제</button>
        </div>
      )
    })
  ) 
}
export default DisplayTask;