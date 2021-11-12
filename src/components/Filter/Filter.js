import styles from './filter.module.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterContact } from "../../redux/contacts/actions"
import {filteredContacts} from "../../redux/contacts/actions"
import { useEffect } from 'react';


const Filter = ({ onFilter, onFilteredCont, filter, contactList }) => {
   
  useEffect(() => {
     if (filter.length > 0) {
      onFilteredCont(contactList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())))  
    }
  }, [filter,contactList, onFilteredCont])
  
  return (
    <>
         <label className = {styles.label}>Find contacts by name</label>
         <input className={styles.input}  onChange={(e) =>onFilter(e.currentTarget.value)} />
       </>
  )
};
Filter.propType = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
const mapStateToProps = state => {
  return {
    filter: state.filter,
    contactList: state.contacts,
  }
}
const mapDispatchToProp = dispatch => {
  return {
    onFilter: (value) => dispatch(filterContact(value)),
    onFilteredCont: (arr) => dispatch(filteredContacts(arr))
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Filter);
