import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
