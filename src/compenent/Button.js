import React from 'react';

function Button({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)} className="btn">
      {label}
    </button>
  );
}

export default Button;
