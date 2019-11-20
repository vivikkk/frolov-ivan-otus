import React from 'react';
import Stopwatch from './Stopwatch';
import '../styles/header.css';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title} ✅</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
