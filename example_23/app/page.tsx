"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Student {
  _id: string;
  name: string;
  age: number;
}

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState({ name: '', age: '' });
  const [nameSearch, setNameSearch] = useState('');
  const [ageSearch, setAgeSearch] = useState('');

  const fetchStudents = async () => {
    try {
      const response = await axios.get<Student[]>('/api/read');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
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

  const filteredStudents = students.filter((student) => {
    const lowerCaseNameSearch = nameSearch.toLowerCase();
    const lowerCaseAgeSearch = ageSearch.toLowerCase();

    return (
      student.name.toLowerCase().includes(lowerCaseNameSearch) &&
      student.age.toString().includes(lowerCaseAgeSearch)
    );
  });

  return (
    <div>
      <h3 style={{textAlign:'center'}}>MongoDB Simple CRUD App - Filter data from Object List</h3>
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


      <center>
        <input
          type="text"
          placeholder="Search by Name"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Age"
          value={ageSearch}
          onChange={(e) => setAgeSearch(e.target.value)}
        />
      </center>
      <br/>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{student.name}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{student.age}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
