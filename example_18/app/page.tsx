"use client"
import React, { useState } from 'react';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div>
      <h1>Simple CRUD Array - Task Manager</h1>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default Home;
