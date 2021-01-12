import React from 'react';
import styles from './fabicon.module.css';

const FabIcon = ({ image, size, title, inlineStyle }) => {
  return (
    <div
      style={title && inlineStyle ? { ...inlineStyle } : {}}
      className={size ? styles[size] : styles.md}
    >
      {image && <img src={image} className={size ? styles[size] : styles.md} />}
      {title && <p>{title}</p>}
    </div>
  );
};

export default FabIcon;
