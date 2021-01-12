import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from 'store';
import Logo from 'assets/logo.png';
import styles from './login.module.css';

const Login = ({ login, user }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  const formHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.type]: e.target.value,
    });
  };

  const loginHandle = (e) => {
    e.preventDefault();
    login(formData);
  };

  // useEffect(() => {
  //   if (user.credentials) {
  //     history.push('/');
  //   }
  // }, [user.credentials]);

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
          <p className={styles.forgotPassword}>Forgot Password?</p>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </div>
      </form>
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
