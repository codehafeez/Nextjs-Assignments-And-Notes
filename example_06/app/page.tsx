'use client'
import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!formData.username) {
      setErrorMessage('Please enter username');
    } else if (!formData.password) {
      setErrorMessage('Please enter password');
    } else {
      console.log('Form submitted:', formData);
      setErrorMessage('Form submitted');
    }
  };

  return (
    <main>
      <h1>Next.js Form Error Message & Submit Value (useState) Example 06</h1>      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Home;
