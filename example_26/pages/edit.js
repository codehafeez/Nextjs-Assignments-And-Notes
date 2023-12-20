"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [student, setStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState({
    name: '',
    age: 0,
    image_name: '',
    imageFile: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/search?id=${id}`);
        setStudent(response.data[0]);
        setUpdatedStudent({
          name: response.data[0].name,
          age: response.data[0].age,
          image_name: response.data[0].image_name,
          imageFile: null,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUpdatedStudent((prevStudent) => ({ ...prevStudent, imageFile: file }));
    }
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', updatedStudent.name);
      formData.append('age', String(updatedStudent.age));
      formData.append('image_name', updatedStudent.image_name);
      formData.append('imageFile', updatedStudent.imageFile || '');

      await axios.put(`/api/update?id=${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      router.push('/');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div>
      <h3>Edit Page</h3>
      {student ? (
        <form onSubmit={handleUpdateStudent} encType="multipart/form-data">
          <img src={`/uploads/${updatedStudent.image_name}`} alt={updatedStudent.image_name} style={{ maxWidth: '100px' }} />
          <br/>
          <input
            required
            placeholder="Name"
            type="text"
            name="name"
            value={updatedStudent.name}
            onChange={handleInputChange}
          />
          <input
            required
            placeholder="Age"
            type="number"
            name="age"
            value={updatedStudent.age}
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button type="submit">Update Student</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPage;
