import React from "react";

const ContactForm = ({ onAddUser }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userName = evt.currentTarget.elements.name.value;
    const userNumber = evt.currentTarget.elements.number.value;
    const formData = {
      userName,
      userNumber,
    };
    onAddUser(formData);

    console.log("Name: ", userName, "Number: ", userNumber);
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type='text' name='name' />
        </label>
        <label>
          <span>Number</span>
          <input type='text' name='number' />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
