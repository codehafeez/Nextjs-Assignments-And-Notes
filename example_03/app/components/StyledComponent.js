import React from 'react';

const myStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#000',
    borderRadius: '8px',
    margin:'10px',
  },
  text: {
    color: '#fff',
    fontSize: '18px',
  },
};

const StyledComponent = () => {
  return (
    <div style={myStyles.container}>
      <p style={myStyles.text}>This is a styled component with inline styles.</p>
    </div>
  );
};

export default StyledComponent;
