import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm /ContactForm";
import { nanoid } from "nanoid";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
