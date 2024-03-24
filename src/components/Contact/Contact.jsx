import React from "react";

const Contact = ({ id, name, number, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <li>
      <p>
        Name: <b>{name}</b>
      </p>
      <p>
        Number: <b>{number}</b>
      </p>
      <button type='button' onClick={handleClick}>
        ❌ Delete
      </button>
    </li>
  );
};

export default Contact;
