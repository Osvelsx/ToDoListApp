import React from 'react';
import './TodoCreateButton.css';

function TodoCreateButton(props) {

  const OnClickButton = () => {
    alert('Alerta!');
  };

  return (
    <button className="TodoCreateButton"
    onClick={OnClickButton}
    >
      +
    </button>
  );
}

export { TodoCreateButton };