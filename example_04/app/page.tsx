'use client'
import React, { useState } from 'react';
const Home = () => {

  const handleButtonClick = () => {
    alert('Button 02 Clicked!');
  };

  const userFunction1 = (name:any) => {
    alert('Button 03 Clicked! => Name: ' + name);
  };

  const [name, setName] = useState('');
  const userFunction2 = (props:any) => {
    setName(props.name);
    alert('Button 04 Clicked! => Name: ' + name+' = Age :'+ props.age);
  };

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  return (
    <main>
      <h2>Next.js Event, State, Props - Example 04</h2>
      <button onClick={()=> alert('Button 01 Clicked!') }>Button 01</button>
      <button onClick={handleButtonClick}>Button 02</button>
      <button onClick={() => userFunction1('Hafeez')}>Button 03</button>
      <button onClick={() => userFunction2({ name: 'Hafeez', age:19 })}>Button 04</button>
      <br/><br/>
      <label>Input:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
    </main>
  );
};

export default Home;
