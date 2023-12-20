"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Student {
  _id: string;
  name: string;
  age: number;
}

const Home = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [searchResults, setSearchResults] = useState<Student[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?name=${name}&age=${age}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  const loadDefaultData = async () => {
    try {
      const response = await axios.get('/api/search');
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching default data:', error);
    }
  };

  useEffect(() => {
    loadDefaultData();
  }, []);

  return (
    <div>
      <h3 style={{textAlign:'center'}}>MongoDB Filter data from DB - Students List</h3>
      <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <br/>
      <br/>

      {searchResults.length > 0 && (
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Age</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((student) => (
              <tr key={student._id}>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{student.name}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
