"use client";
import React, { useState } from 'react';
import axios from 'axios';
import '../app/globals.css';
import { useRouter } from 'next/navigation';

const AddStudentForm = ({ onAdd }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [image, setImage] = useState(null); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('grade', grade);
    formData.append('image', image);

      axios.post('http://localhost/php-api/index.php', formData, {
        headers: {
        'Content-Type': 'multipart/form-data',
        },
      }).then(response => {
        alert(response.data.message);
        onAdd();
      })
      .catch(error => console.error('Error adding student: ', error));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Grade:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
