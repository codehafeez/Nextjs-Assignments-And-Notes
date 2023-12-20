"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const StudentList = ({ onRefresh }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, [onRefresh]);

  const fetchStudents = () => {
    axios.get('http://localhost/php-api/index.php')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching student data: ', error))
      .finally(() => {
        setLoading(false);
      });
  };
  
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Do you want to delete this student data?");
    if (confirmDelete) {
      deleteStudent(id);
    }
  };

  const deleteStudent = (id) => {
    axios.post(`http://localhost/php-api/index.php?action=delete`, { id })
      .then(response => {
        if (response.data && response.data.message) {
          alert(response.data.message);
          fetchStudents(); // Refresh the student list if needed
        } else {
          alert('Unexpected response structure');
        }
      })
      .catch(error => console.error('Error deleting student: ', error));
  };
    
  return (
    <div>
      
      {loading ? (
        <p style={{textAlign:'center'}}>Loading...</p>
      ) : (      
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>ID</th>
            <th style={tableCellStyle}>Name</th>
            <th style={tableCellStyle}>Age</th>
            <th style={tableCellStyle}>Grade</th>
            <th style={tableCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td style={tableCellStyle}>{student.id}</td>
              <td style={tableCellStyle}>{student.name}</td>
              <td style={tableCellStyle}>{student.age}</td>
              <td style={tableCellStyle}>{student.grade}</td>
              <td style={tableCellStyle}>
                <Link style={{margin:'10px'}} href={`/edit?id=${student.id}`}>Edit</Link>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

    </div>
  );
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default StudentList;
