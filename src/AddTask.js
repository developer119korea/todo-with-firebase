import React from 'react';

const AddTask = ({ value, changeHandler, clickHandler }) => {
  return (
    <div>
      <form>
        <input value={value} onChange={changeHandler}></input>
        <button onClick={clickHandler}>저장</button>
      </form>
    </div>
  )
}

export default AddTask;