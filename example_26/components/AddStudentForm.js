"use client";
import { useState } from 'react';
import axios from 'axios';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/students', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onAddStudent(response.data);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder='Age' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
