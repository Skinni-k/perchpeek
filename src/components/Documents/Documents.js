import React from 'react';
import NoData from 'assets/noData.svg';
import styles from './documents.module.css';

const Home = () => {
  return (
    <div className={styles.docsContainer}>
      <img src={NoData} alt="No Data" />
      <h2 style={{ marginTop: '1rem' }}>Documents data not available</h2>
    </div>
  );
};

export default Home;
