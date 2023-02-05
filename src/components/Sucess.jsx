import { NavLink } from "react-router-dom";
import styles from '../styles/Global';
// Cancel.js
const Cancel = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Thank you for your support, your payment has been accepted</h1>
        </div>
          <NavLink to="/" className={`checkout-button ${styles.btnPrimary}`} >Return to the home page</NavLink>
      </div>
    </div>
  );
};

export default Cancel;