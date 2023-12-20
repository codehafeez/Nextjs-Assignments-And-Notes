"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../app/globals.css';

const EditStudentForm = ({ studentId, onUpdate }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    if (studentId) {
      axios.get(`http://localhost/php-api/index.php?id=${studentId}&action=edit`)
        .then(response => {
          const existingStudent = response.data[0];
          if (existingStudent) {
            setName(existingStudent.name);
            setAge(existingStudent.age);
            setGrade(existingStudent.grade);
          }
        })
        .catch(error => console.error('Error fetching student data: ', error));
    }
  }, [studentId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { id:studentId, name, age, grade };
    axios.post(`http://localhost/php-api/index.php?action=update`, updatedStudent)
    .then(response => {
        alert(response.data.message);
        onUpdate();
      })
      .catch(error => console.error('Error updating student: ', error));
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Grade:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudentForm;
