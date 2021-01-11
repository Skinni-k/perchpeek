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
        <div style={{ flex: 1 }}>
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
            <FabIcon image={User} size={'lg'} />
          </nav>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default PageLayout;
