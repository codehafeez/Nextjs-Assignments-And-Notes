"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/search?id=${id}`);
        setStudent(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }    
    };

    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/api/update?id=${id}`, student);
      if (response.data.success) {
        alert('Student Updated Successfully');
        router.push('/');
      } else {
        alert(`Error Updating Student: ${response.data.error}`);
      }
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div>
      
      {loading ? (
        <p style={{textAlign:'center'}}>Loading...</p>
      ) : (

        student && (
          <div>
            <input
              type="text"
              placeholder="Name"
              value={student.name}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Age"
              value={student.age}
              onChange={(e) => setStudent({ ...student, age: e.target.value })}
            />
            <button onClick={handleUpdate}>Update Student</button>
          </div>
        )

      )}
    </div>
  );
};

export default EditPage;
