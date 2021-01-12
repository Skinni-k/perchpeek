import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'components/Routes';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
