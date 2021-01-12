import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addActivityAction } from 'store/actions/addActivityAction';
import FabIcon from 'components/FabIcon';
import Add from 'assets/add.svg';
import styles from './feed.module.css';

const Home = ({ activities, addActivity }) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className={styles.newActivity} onClick={modalHandler}>
        <FabIcon image={Add} size={'sm'} />
        <h4 style={{ marginLeft: '0.5rem' }}>Add new activity</h4>
      </div>
      <div style={{ marginTop: '0.5rem' }} className={styles.activityList}>
        <div className={styles.activity}>
          <FabIcon
            inlineStyle={{ backgroundColor: 'salmon' }}
            title={'AV'}
            size={'md'}
          />
          <h4 style={{ marginLeft: '1rem' }}>Ace Vinayak added a note:</h4>
          <p style={{ marginLeft: '0.5rem' }}>
            He's increased his budget by a $100 per month.
          </p>
        </div>
        <hr />
        <div className={styles.activity}>
          <FabIcon
            inlineStyle={{ backgroundColor: 'salmon' }}
            title={'AV'}
            size={'md'}
          />
          <h4 style={{ marginLeft: '1rem' }}>Ace Vinayak added a note:</h4>
          <p style={{ marginLeft: '0.5rem' }}>
            He's increased his budget by a $100 per month.
          </p>
        </div>
        <hr />
        <div className={styles.activity}>
          <FabIcon
            inlineStyle={{ backgroundColor: 'salmon' }}
            title={'AV'}
            size={'md'}
          />
          <h4 style={{ marginLeft: '1rem' }}>Ace Vinayak added a note:</h4>
          <p style={{ marginLeft: '0.5rem' }}>
            He's increased his budget by a $100 per month.
          </p>
        </div>
        <hr />
      </div>

      <button
        onClick={() => {
          addActivity('test');
        }}
      >
        test dispatch
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.addActivity,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addActivity: (data) => dispatch(addActivityAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
