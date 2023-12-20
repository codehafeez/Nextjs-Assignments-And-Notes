"use client";
import React, { useState } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

const StudentApp = () => {
  
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Student Simple CRUD App - PHP APIs</h2>
      <AddStudentForm onAdd={handleRefresh} />
      <StudentList onRefresh={handleRefresh} />
    </div>
  );
};

export default StudentApp;
