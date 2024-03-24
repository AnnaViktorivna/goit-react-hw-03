import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm /ContactForm";
import { nanoid } from "nanoid";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const userContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const localStorageContacts = () => {
    const contactList = localStorage.getItem("contacts");
    return contactList ? JSON.parse(contactList) : userContacts;
  };
  const [contacts, setContacts] = useState(localStorageContacts());

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, finalUser]);
    localStorage.setItem("contacts", JSON.stringify([...contacts, finalUser]));
  };

  const onDeleteUser = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox />
      <ContactList contacts={contacts} onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default App;
