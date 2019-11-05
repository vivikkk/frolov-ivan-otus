import React from 'react';
import '../styles/header.css';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title} ✅</h1>
    </header>
  );
};

export default Header;
