"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../app/globals.css';

const EditStudentForm = ({ studentId, onUpdate }) => {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [image, setImage] = useState(null); 
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (studentId) {
      axios.get(`http://localhost/php-api/index.php?id=${studentId}&action=edit`)
        .then(response => {
          const existingStudent = response.data[0];
          if (existingStudent) {
            setName(existingStudent.name);
            setAge(existingStudent.age);
            setGrade(existingStudent.grade);
            setImageUrl(`http://localhost/php-api/upload/${existingStudent.image_path}`);
          }
        })
        .catch(error => console.error('Error fetching student data: ', error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [studentId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedStudent = new FormData();
    updatedStudent.append('id', studentId);
    updatedStudent.append('name', name);
    updatedStudent.append('age', age);
    updatedStudent.append('grade', grade);
    if (image) {
      updatedStudent.append('image', image);
    }

    axios.post(`http://localhost/php-api/index.php?action=update`, updatedStudent, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        alert(response.data.message);
        onUpdate();
      })
      .catch(error => console.error('Error updating student: ', error));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h2>Edit Student</h2>

      {loading ? (
        <p style={{textAlign:'center'}}>Loading...</p>
      ) : (

      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Grade:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        <label>Image:</label>
        
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image for ${name}`}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        )}

        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Update Student</button>
      </form>

      )}
    </div>
  );
};

export default EditStudentForm;
