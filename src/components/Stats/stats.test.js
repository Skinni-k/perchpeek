import React from 'react';
import ReactDOM from 'react-dom';
// import { render, fireEvent } from '@testing-library/react';
import Stats from './Stats';

it('renders correctly', () => {
  //   const { queryByTestId, queryByPlaceholder } = render(<Stats />);

  //   expect(queryByTestId('login-button')).toBeTruthy();

  const div = document.createElement('div');
  ReactDOM.render(<Stats></Stats>, div);
});
