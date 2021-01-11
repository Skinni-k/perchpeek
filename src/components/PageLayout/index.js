import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Search from 'assets/search.svg';
import styles from './pageLayout.module.css';
import FabIcon from 'components/FabIcon';
import User from 'assets/user.png';

const PageLayout = (props) => {
  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <Link to="/" className={styles.home}>
              perchpeek
            </Link>
            <div className={styles.divider}></div>
            <Link to="/overview" className={styles.route}>
              Overview
            </Link>
            <div className={styles.divider}></div>
            <p className={styles.sectionTitle}>Manage</p>
            {['users', 'properties', 'viewings', 'support'].map((route) => {
              return (
                <Link
                  to={`/${route}`}
                  style={{ margin: '0.7rem 0' }}
                  className={styles.route}
                  key={route}
                >
                  {route}
                </Link>
              );
            })}
            <div className={styles.divider}></div>
            <p className={styles.sectionTitle}>Get Help</p>
            <Link
              to="knowledge-base"
              style={{ margin: '0.7rem 0' }}
              className={styles.route}
            >
              Knowledge Base
            </Link>
          </div>
        </aside>
        <div className={styles.rightContainer}>
          <nav className={styles.navBar}>
            <div className={styles.searchContainer}>
              <img
                src={Search}
                className={styles.searchIcon}
                onClick={inputFocus}
              />
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchBar}
                ref={inputRef}
              />
            </div>
            <div style={{ marginRight: '1.3rem' }}>
              <FabIcon image={User} size={'lg'} />
            </div>
          </nav>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default PageLayout;
