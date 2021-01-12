import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addActivityAction } from 'store/actions/addActivityAction';
import FabIcon from 'components/FabIcon';
import Add from 'assets/add.svg';
import styles from './feed.module.css';
import AddActivityModal from './addActivityModal';

const Home = ({ activities, user, addActivity }) => {
  const [showModal, setShowModal] = useState(false);
  const defaultFromState = {
    activityType: '',
    url: '',
    notes: '',
    assignee: '',
    urlTitle: '',
  };
  const [formData, setFormData] = useState(defaultFromState);

  const activitiesLocal = JSON.parse(localStorage.getItem('activities'));

  const modalHandler = () => {
    setShowModal(true);
  };

  const dataOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const activitySubmit = () => {
    if (formData.activityType !== '') {
      const from = user.credentials.username;
      const title =
        formData.activityType === 'note'
          ? `${from} added a note:`
          : formData.activityType === 'enquiry'
          ? `${from} made a property enquiry:`
          : `${from} created a task:`;

      const finalData = {
        type: title,
        note: formData.notes,
        assignee: formData.assignee,
        url: formData.url,
        urlTitle: formData.urlTitle,
      };
      addActivity(finalData);
      setShowModal(false);
    } else {
      alert('Select Type of Activity');
    }
  };

  useEffect(() => {
    if (activitiesLocal && activities.length === 0) {
      addActivity(activitiesLocal);
    }
  }, []);

  useEffect(() => {
    setFormData(defaultFromState);
  }, [activities]);

  return (
    <div>
      <div className={styles.newActivity} onClick={modalHandler}>
        <FabIcon image={Add} size={'sm'} />
        <h4 style={{ marginLeft: '0.5rem' }}>Add new activity</h4>
      </div>
      {activities.length > 0 && (
        <div
          style={{ margin: '0.5rem 0 2rem 0' }}
          className={styles.activityList}
        >
          {activities.map((activity) => {
            return (
              <React.Fragment key={activity.type}>
                <div className={styles.activity}>
                  <FabIcon
                    inlineStyle={{ backgroundColor: 'salmon' }}
                    title={user.credentials.initials}
                    size={'md'}
                  />
                  <div style={{ marginLeft: '1rem', width: 'fit-content' }}>
                    <h4 style={{ display: 'inline' }}>{activity.type}</h4>
                    <p style={{ marginLeft: '0.5rem', display: 'inline' }}>
                      {activity.urlTitle ? (
                        <a target="_blank" href={activity.url}>
                          {activity.urlTitle}.
                        </a>
                      ) : null}{' '}
                      {activity.note}.
                    </p>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            );
          })}
        </div>
      )}
      <AddActivityModal
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        dataOnChange={dataOnChange}
        activitySubmit={activitySubmit}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addActivity: (data) => dispatch(addActivityAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
