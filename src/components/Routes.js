import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Home from 'components/Home';
import Login from 'components/Login';
import Page404 from 'components/Error';
import Spinner from 'components/Spinner';

let Routes = () => {
  const [loading, setLoading] = useState(true);
  const userLocalStorage = localStorage.getItem('user');

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
        component={userLocalStorage ? Home : Login}
      />
      <Route component={Page404} />
    </Switch>
  );
};

export default Routes;
