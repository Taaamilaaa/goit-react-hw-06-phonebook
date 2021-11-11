import styles from './filter.module.css';
import PropTypes from "prop-types";


 const Filter = ({  onChange }) => {
  
  return (
    <>
         <label className = {styles.label}>Find contacts by name</label>
         <input className={styles.input}  onChange={ onChange} />
       </>
  )
};
Filter.propType = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};


export default Filter;
