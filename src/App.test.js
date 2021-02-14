import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  const component = (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  render(component);
});
