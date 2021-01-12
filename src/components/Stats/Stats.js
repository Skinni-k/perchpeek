import React from 'react';
import NoData from 'assets/noData.svg';
import styles from './stats.module.css';

const Stats = () => {
  return (
    <div className={styles.statsContainer}>
      <img src={NoData} alt="No Data" />
      <h2 style={{ marginTop: '1rem' }}>Stats data not available</h2>
    </div>
  );
};

export default Stats;
