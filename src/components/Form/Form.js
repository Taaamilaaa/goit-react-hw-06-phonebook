import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./form.module.css";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/actions";

const Form = ({ onSubmit, onAdd }) => {
  const nameInputId = uuid();
  const numberInputId = uuid();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    // onSubmit(contact);
    onAdd(contact);
    setName("");
    setNumber("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameInputId}>
        Name
      </label>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title=""
        required
        onChange={handleChangeName}
      />
      <label className={styles.label} htmlFor={numberInputId}>
        Number
      </label>
      <input
        className={styles.input}
        type="tel"
        name="number"
        value={number}
        id={numberInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title=""
        required
        onChange={handleChangeNumber}
      />
      <button className={styles.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (contact) => dispatch(addContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
