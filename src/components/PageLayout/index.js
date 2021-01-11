import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageLayout.module.css';

const PageLayout = (props) => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <Link to="/" className={styles.home}>
              perchpeek
            </Link>
            <div className={styles.divider}></div>
            <Link to="/overview" className={styles.route}>
              Overview
            </Link>
            <div className={styles.divider}></div>
            <p
              style={{
                color: 'lightgray',
                marginBottom: '1rem',
              }}
            >
              Manage
            </p>
            {['users', 'properties', 'viewings', 'support'].map((route) => {
              return (
                <Link
                  to={`/${route}`}
                  style={{ margin: '0.7rem 0' }}
                  className={styles.route}
                >
                  {route}
                </Link>
              );
            })}
            <div className={styles.divider}></div>
            <p
              style={{
                color: 'lightgray',
                marginBottom: '1rem',
              }}
            >
              Get Help
            </p>
            <Link
              to="knowledge-base"
              style={{ margin: '0.7rem 0' }}
              className={styles.route}
            >
              Knowledge Base
            </Link>
          </div>
        </div>
        <nav></nav>
        {props.children}
      </div>
    </>
  );
};

export default PageLayout;
