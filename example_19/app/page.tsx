"use client"
import React, { useState } from 'react';
import TaskList from '../components/TaskList';

// Define the type for a task
type Task = {
  id: number;
  name: string;
  age: number;
};

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({ id: 0, name: '', age: 0 });

  const addTask = () => {
    if (newTask.name.trim() !== '' && newTask.age > 0) {
      setTasks([...tasks, newTask]);
      setNewTask({ id: 0, name: '', age: 0 });
    }
  };

  const deleteTask = (taskToDelete: Task) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div>
      <h1>Simple CRUD Array Object - Task Manager</h1>
      <div>
        <label>ID:</label>
        <input
          type="number"
          value={newTask.id}
          onChange={(e) => setNewTask({ ...newTask, id: parseInt(e.target.value) || 0 })}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={newTask.age}
          onChange={(e) => setNewTask({ ...newTask, age: parseInt(e.target.value) || 0 })}
        />
      </div>
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default Home;