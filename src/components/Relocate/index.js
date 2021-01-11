import React from 'react';
import { Link } from 'react-router-dom';
import FabIcon from 'components/FabIcon';
import Customer from 'assets/customer.png';
import DownArrow from 'assets/down-arrow.svg';
import styles from './recolate.module.css';

const Relocate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <FabIcon image={Customer} size={'lg'} />
        <p style={{ marginLeft: '1.2rem' }}>
          Moving to{' '}
          <Link
            to="/berlin"
            style={{
              fontWeight: 'bold',
              color: '#86B6DE',
              textDecoration: 'none',
            }}
          >
            Berlin,Germany
          </Link>
        </p>
      </div>
      <div
        onClick={() => alert('You are awesome')}
        className={styles.rightContent}
        style={{ cursor: 'pointer' }}
      >
        <FabIcon image={DownArrow} size={'sm'} />
      </div>
    </div>
  );
};

export default Relocate;
