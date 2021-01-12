import React, { useState } from 'react';
import Modal from 'components/Modal';
import { connect } from 'react-redux';
import { loginAction } from 'store';
import Logo from 'assets/logo.png';
import styles from './login.module.css';

const Login = ({ user, login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showModal, setShowModal] = useState(false);

  const validUser = {
    email: 'ace@perchpeek.com',
    password: 'perchpeek',
  };

  const formHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.type]: e.target.value,
    });
  };

  const loginHandle = (e) => {
    e.preventDefault();
    // Make API call here. If success dispatch with the response including data else dispatch with no data
    if (
      formData.email === validUser.email &&
      formData.password === validUser.password
    ) {
      login({ email: formData.email, username: 'Ace Vinayak', initials: 'AV' });
    } else {
      login();
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={loginHandle}>
        <img src={Logo} alt="PerchPeek Logo" className={styles.logo} />
        <input
          type="email"
          placeholder="Enter Email"
          className={styles.input}
          onChange={(e) => formHandle(e)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          className={styles.input}
          onChange={(e) => formHandle(e)}
          required
        />

        <h5
          style={{
            color: 'red',
            marginTop: '1rem',
            visibility: user.error ? 'visible' : 'hidden',
          }}
        >
          {user.error ? user.error : 'undefined'}
        </h5>

        <div className={styles.formAction}>
          <p
            className={styles.forgotPassword}
            onClick={() => setShowModal(true)}
          >
            Forgot Password?
          </p>
          <button
            data-testid="login-button"
            type="submit"
            className={styles.button}
          >
            Login
          </button>
        </div>
      </form>
      {showModal && (
        <Modal
          title={'Forgot Password?'}
          close={() => setShowModal(false)}
          size={'modalSM'}
        >
          Look in the README file for the credentials
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(loginAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
