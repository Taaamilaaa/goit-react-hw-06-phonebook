import "./App.css";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { connect } from "react-redux";

const App = ({contactList}) => {
    return (
      <div className="phonebook">
        <h2 className="title">Phonebook</h2>
        <Form/>
        <h2 className="title">Contacts</h2>
        <Filter />
        {contactList.length > 0
          ? (<ContactList />)
          : (<p className="notification">Please add your contacts.</p>)}
       
     
      </div>
    );
  };
  
const mapToStateProps = state => {
  return {    
    contactList: state.contacts,
  }
}
export default connect(mapToStateProps)(App);
