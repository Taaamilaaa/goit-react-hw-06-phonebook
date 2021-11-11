import React from "react";
import styles from "./contactItem.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/actions";

const ContactItem = ({ contactList, onDel }) => {
  return contactList.map((contact) => {
    const { id, name, number } = contact;

    return (
      <li className={styles.contactItem} key={id}>
        <span id="name" className={styles.name}>
          {name}:
        </span>
        <span className={styles.number}>{number}</span>
        <button className={styles.btn} onClick={() => onDel(id)}>
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

const mapStateToProps = (state) => {
  return {
    contactList: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDel: (contact) => dispatch(deleteContact(contact)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
