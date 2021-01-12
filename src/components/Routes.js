import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// components
import Home from 'components/Home';
import Login from 'components/Login';
import Page404 from 'components/Error';
import Spinner from 'components/Spinner';
import { loginAction } from 'store';

let Routes = ({ user, login }) => {
  const [loading, setLoading] = useState(true);
  const userLocal = JSON.parse(localStorage.getItem('user'));

  // When the website first loads, check if user is available in the local storage, if yes, add those details to
  // the store and send the user to homepage. If no user deatils available, send them to login page
  useEffect(() => {
    if (userLocal) {
      login(userLocal);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Spinner />;

  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        component={user.credentials ? Home : Login}
      />
      <Route component={Page404} />
    </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
