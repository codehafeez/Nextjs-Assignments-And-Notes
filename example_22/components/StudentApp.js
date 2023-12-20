"use client";
import React, { useState } from 'react';
import StudentList from './StudentList';
import { useRouter } from 'next/navigation';

const StudentApp = () => {

  const router = useRouter();
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Student CRUD App - PHP APIs</h2>
      <button style={{float:'right', margin:'10px'}} onClick={() => router.push('/add')}>Add Student</button>
      <StudentList onRefresh={handleRefresh} />
    </div>
  );
};

export default StudentApp;
