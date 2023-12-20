import React from 'react';
const Home = () => {

  const isConditionMet = true; 
  const textStyle = {
    color: isConditionMet ? 'red' : 'blue',
  };

  return (
    <div>
      <h2>Next.js Condition Show Div & Text Color</h2>
      {isConditionMet ? (
        <div>
          <p style={textStyle}>This div is rendered when the condition is true.</p>
        </div>
      ) : (
        <div>
          <p style={textStyle}>This div is rendered when the condition is false.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
