import { NavLink } from "react-router-dom";
import styles from '../styles/Global';
// Cancel.js
const Cancel = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>We are sorry that you cancelled your payment and we hope you can reach us after the launch.</h1>
        </div>
          <NavLink to="/" className={`checkout-button ${styles.btnPrimary}`} >Return to the home page</NavLink>
        
      </div>
    </div>
  );
};

export default Cancel;