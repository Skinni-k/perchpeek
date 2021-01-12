import React from 'react';
import styles from './feed.module.css';
import Modal from 'components/Modal';

const AddActivityModal = ({
  showModal,
  setShowModal,
  formData,
  dataOnChange,
  activitySubmit,
}) => {
  return (
    <>
      {showModal && (
        <Modal
          title={'Add Activity'}
          close={() => setShowModal(false)}
          size={'modalLG'}
        >
          <select
            value={formData.activityType}
            onChange={dataOnChange}
            className={styles.input}
            id="activityType"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="note">Add Note</option>
            <option value="enquiry">Add Enquiry</option>
            <option value="task">Add Task</option>
          </select>

          {formData.activityType !== 'task' && (
            <>
              <input
                type="text"
                placeholder="Add property URL (optional)"
                id="url"
                className={styles.input}
                style={{ marginTop: '2rem' }}
                value={formData.url}
                onChange={dataOnChange}
              />
              {formData.url.length > 10 ? (
                <input
                  type="text"
                  placeholder="Add URL Title"
                  id="urlTitle"
                  className={styles.input}
                  style={{ marginTop: '2rem' }}
                  value={formData.urlTitle}
                  onChange={dataOnChange}
                  required
                />
              ) : null}
            </>
          )}

          {formData.activityType === 'task' && (
            <select
              value={formData.assignee}
              className={styles.input}
              style={{ marginTop: '2rem' }}
              onChange={dataOnChange}
              id="assignee"
            >
              <option disabled value="">
                Select
              </option>
              <option value="paul@perchpeek.com">paul@perchpeek.com</option>
              <option value="beinat@perchpeek.com">beinat@perchpeek.com</option>
            </select>
          )}

          <textarea
            id="notes"
            onChange={dataOnChange}
            className={styles.textArea}
            placeholder="Add notes"
            value={formData.notes}
            required
          />
          <button onClick={activitySubmit} className={styles.addActicityButton}>
            Submit
          </button>
        </Modal>
      )}
    </>
  );
};

export default AddActivityModal;
