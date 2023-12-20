import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1>Component Header Layout</h1>
      <p>Page Title : {title}</p>
      <hr/>
    </header>
  );
};

export default Header;
