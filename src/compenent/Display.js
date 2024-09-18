import React from 'react';

function Display({ value }) {
  return (
    <input type="text" value={value} disabled className="display" />
  );
}

export default Display;
