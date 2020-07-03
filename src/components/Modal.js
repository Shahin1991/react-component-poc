import React from "react";

import styles from './Modal.module.css'

const Modal = ({ show, children }) => {
    const showHideClassName = show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`;
  
    return (
      <div className={showHideClassName}>
        <section className={styles.modalMain}>
          {children}
        </section>
      </div>
    );
  };

  export default Modal