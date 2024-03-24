import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = {
      id: nanoid(),
      name: evt.currentTarget.elements.name.value,
      number: evt.currentTarget.elements.number.value,
    };
    onAdd(formData);
    evt.target.reset();
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
