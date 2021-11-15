import React from "react";
import styles from "./contactItem.module.css";
import PropTypes from "prop-types";
import { deleteContact } from "../../redux/contacts/actions";
import { useSelector, useDispatch } from "react-redux";

const ContactItem = () => {
  
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const getVisibleContact = (arrOfContacts, filter) => {
    return arrOfContacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContact(contacts, filter);

  return visibleContacts.map((contact) => {
    const { id, name, number } = contact;
    return (
      <li className={styles.contactItem} key={id}>
        <span id="name" className={styles.name}>
          {name}:
        </span>
        <span className={styles.number}>{number}</span>
        <button
          className={styles.btn}
          onClick={() => dispatch(deleteContact(id))}
        >
          ❌
        </button>
      </li>
    );
  });
};

ContactItem.propType = {
  contacts: PropTypes.obj,
  clickOnBtn: PropTypes.func,
};
export default ContactItem;
