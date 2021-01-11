import React, { useState } from 'react';
import PageLayout from 'components/PageLayout';
import Relocate from 'components/Relocate';
import Feed from 'components/Feed';
import Stats from 'components/Stats';
import Documents from 'components/Documents';
import styles from './home.module.css';

const Home = () => {
  const [tabs, setTabs] = useState('Activity Feed');

  const tabChange = (e) => {
    setTabs(e.target.id);
  };

  return (
    <PageLayout>
      <div className={styles.container}>
        <h2 className={styles.customerName}>Oliver Markham</h2>
        <Relocate />
        <div className={styles.tabs}>
          {['Activity Feed', 'Stats', 'Documents'].map((tab) => {
            return (
              <React.Fragment key={tab}>
                <h2
                  id={tab}
                  className={tabs === tab ? styles.tabActive : styles.tab}
                  onClick={(e) => tabChange(e)}
                >
                  {tab}
                </h2>
              </React.Fragment>
            );
          })}
        </div>
        {tabs === 'Activity Feed' ? (
          <Feed />
        ) : tabs === 'Stats' ? (
          <Stats />
        ) : (
          <Documents />
        )}
      </div>
    </PageLayout>
  );
};

export default Home;
