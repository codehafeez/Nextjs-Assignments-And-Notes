import React from 'react';
import { add, subtract, multiply, divide } from '../public/hafeez_functions';

const HomePage = () => {
  const resultAdd = add(5, 3);
  const resultSubtract = subtract(10, 4);
  const resultMultiply = multiply(6, 2);
  const resultDivide = divide(8, 2);

  return (
    <div>
      <h1>Math Operations - Helper.js</h1>
      <p>Addition: {resultAdd}</p>
      <p>Subtraction: {resultSubtract}</p>
      <p>Multiplication: {resultMultiply}</p>
      <p>Division: {resultDivide}</p>
    </div>
  );
};

export default HomePage;
