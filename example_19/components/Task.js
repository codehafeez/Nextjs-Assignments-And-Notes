import React from 'react';
const Task = ({ task, onDelete }) => {
  return (
    <div>
      <p>{`ID: ${task.id}, Name: ${task.name}, Age: ${task.age}`}</p>
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
};

export default Task;
