"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Student {
  _id: string;
  name: string;
  age: number;
}

const StudentList = () => {
  const router = useRouter();

  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState({ name: '', age: '' });
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

  const handleCreate = async () => {
    try {
      await axios.post('/api/create', newStudent);
      fetchStudents();
      setNewStudent({ name: '', age: '' });
    } catch (error) {
      console.error('Error creating student:', error);
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
      <h3 style={{textAlign:'center'}}>MongoDB Simple CRUD App</h3>
      <input
        type="text"
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={newStudent.age}
        onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
      />
      <button onClick={handleCreate}>Add Student</button>
      <br/>
      <br/>

      {loading ? (
        <p style={{textAlign:'center'}}>Loading...</p>
      ) : (
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{student.name}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{student.age}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                <button style={{ marginRight: '10px' }} onClick={() => router.push(`/edit?id=${student._id}`)}>Edit</button>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

    </div>
  );
};

export default StudentList;
