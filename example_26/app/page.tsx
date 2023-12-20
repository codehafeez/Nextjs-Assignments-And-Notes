"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Student from '../models/Student';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState({ name: '', age: 0, image_name: '', imageFile: null });
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const response = await axios.get<Student[]>('/api/read');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewStudent((prevStudent:any) => ({ ...prevStudent, imageFile:file }));
    }
  };

  const handleAddStudent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', newStudent.name);
      formData.append('age', String(newStudent.age));
      formData.append('image_name', newStudent.image_name);
      formData.append('imageFile', newStudent.imageFile || '');

      await axios.post('/api/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      fetchStudents();

    // Reset the form by class name & set null input state
    const addForm = document.getElementsByClassName('addForm')[0] as HTMLFormElement;
    if (addForm) {
      setNewStudent({ name: '', age: 0, image_name: '', imageFile: null });
      addForm.reset();
    }
  
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete('/api/delete', { data: { id } });
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>CRUD App with Image using MongoDB</h3>

      <form className='addForm' onSubmit={handleAddStudent} encType="multipart/form-data">
        <input required placeholder="Name" type="text" name="name" value={newStudent.name} onChange={handleInputChange} />
        <input required placeholder="Age" type="number" name="age" value={newStudent.age} onChange={handleInputChange} />
        <input required type="file" name="imageFile" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add Student</button>
      </form>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.age}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <img src={`/uploads/${student.image_name}`} alt={student.image_name} style={{ maxWidth: '100px' }} />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <center>
                <button style={{ marginRight: '10px' }} onClick={() => router.push(`/edit?id=${student._id}`)}>Edit</button>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        )}

    </div>
  );
}
