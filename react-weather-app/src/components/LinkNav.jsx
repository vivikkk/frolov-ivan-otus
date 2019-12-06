import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkNav = ({ children, ...rest }) => {
  return (
    <NavLink {...rest}>{children}</NavLink>
  );
}

export default LinkNav;

