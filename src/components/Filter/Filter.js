import styles from './filter.module.css';
import PropTypes from "prop-types";


 const Filter = ({ value, onChange }) => {
  
  return (
    <>
         <label className = {styles.label}>Find contacts by name</label>
         <input className={styles.input} value={value} onChange={ onChange} />
       </>
  )
};
Filter.propType = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};


export default Filter;
