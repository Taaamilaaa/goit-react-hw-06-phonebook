import { ContactItem } from "../ContactItem/ContactItem";
import styles from "./contactList.module.css";
import PropTypes from "prop-types"; // ES6
import { connect } from "react-redux";
import {deleteContact} from "../../redux/contacts/actions"

 function ContactList({ contactList, onDel }) {
  return (
    <>
      <ul className={styles.list}>
        <ContactItem contacts={contactList} clickOnBtn={onDel} key={contactList.id} />
      </ul>
    </>
  );
}
ContactList.prototype = {
contacts: PropTypes.obj,
clickOnBtn: PropTypes.func,
}

const mapStateToProps = state => {
   return {
    contactList: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDel: contact => dispatch(deleteContact(contact)),
  };
};


export default connect(mapStateToProps , mapDispatchToProps)(ContactList)