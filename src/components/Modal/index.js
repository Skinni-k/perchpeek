import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';

const Modal = ({ title, close, size, children }) => {
  return ReactDom.createPortal(
    <>
      <div onClick={close} className={styles.overlay} />
      <div
        className={`${styles.modal} ${size ? styles[size] : styles.modalSM}`}
      >
        <div className={styles.header}>
          <h3 style={{ margin: '0 1.5rem' }}>{title}</h3>
          <h4 className={styles.close} onClick={close}>
            X
          </h4>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
