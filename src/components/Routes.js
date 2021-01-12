import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// components
import Home from 'components/Home';
import Login from 'components/Login';
import Page404 from 'components/Error';
import Spinner from 'components/Spinner';

let Routes = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const userLocal = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 20);
  }, []);

  if (loading) return <Spinner />;

  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        component={user && userLocal ? Home : Login}
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

export default connect(mapStateToProps)(Routes);
