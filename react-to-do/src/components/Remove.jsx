import React from 'react';

const Remove = (props) => {
  return (
    <div className="remove" onClick={props.onClick}>
      <span>❌</span>
    </div>
  );
};

export default Remove;
