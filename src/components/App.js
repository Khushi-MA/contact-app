import React, {useState} from "react";

import "./App.css";

import Header from "./header";
import ContactList from "./contactlist";
import AddContact from "./addcontact";
// import ContactCard from "./contactcard";

function App() {

  const [contacts, setContacts] = useState([]);

  // removed during hook creation (state)
  // const contacts = [
  //   {
  //     id: "1",
  //     "name": "Dipesh",
  //     "email": "dipesh@mail.com",
  //   },
  //   {
  //     id: "2",
  //     "name": "Khushi",
  //     "email": "khush@mail.com",
  //   }
  // ]

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  return (
    <div className="ui container">
      <header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts} />
      {/* <ContactCard contact={{id:"3", name: 'John Doe', email: 'john@doe.com' }}/> */}
    </div>
  );
}

export default App;
