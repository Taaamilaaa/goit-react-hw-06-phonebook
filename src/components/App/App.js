import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { connect } from "react-redux";

// import { useDispatch } from "react-redux";
import {filterContact} from "../../redux/contacts/actions"

const App = ({ onFilter, contacts, filter }) => {
  // const [filter, setFilter] = useState("");
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  

  const formSubmitHandle = (newContact) => {
    const renderedNames = contacts.find(
      (contact) => contact.name.toUpperCase() === newContact.name.toUpperCase()
    );
    if (renderedNames) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    // setContacts((prevState) => [newContact, ...prevState]);
  };

  const filterChange = (event) => {
    onFilter(event.currentTarget.value);
    // setFilter(event.currentTarget.value);
  };
   
  const contactsFilter = () => {
    if (filter.length > 0) {
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()));
    };
  };
   
    
  

    // useEffect(() => {
    //   const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    //   if (parsedContacts) {
    //     setContacts(parsedContacts);
    //   }
    // }, []);

    // useEffect(() => {
    //   const contactsJson = JSON.stringify(contacts);
    //   if (contactsJson) {
    //     localStorage.setItem("contacts", contactsJson);
    //   }
    // }, [contacts]);

    return (
      <div className="phonebook">
        <h2 className="title">Phonebook</h2>
        <Form onSubmit={formSubmitHandle} />
        <h2 className="title">Contacts</h2>
        <Filter onChange={filterChange} />
        {contacts.length > 0 ? (
          <ContactList contacts={contactsFilter()} />
        ) : (
          <p className="notification">Please add your contacts.</p>
        )}
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      contacts: state.contacts,
      filter: state,
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onFilter: (value) => dispatch(filterContact(value))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
