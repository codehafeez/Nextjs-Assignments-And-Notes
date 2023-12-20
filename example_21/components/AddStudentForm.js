"use client";
import React, { useState } from 'react';
import axios from 'axios';
import '../app/globals.css';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, age, grade };
    axios.post('http://localhost/php-api/index.php', newStudent)
      .then(() => {
        onAdd();
      })
      .catch(error => console.error('Error adding student: ', error));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Grade:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
