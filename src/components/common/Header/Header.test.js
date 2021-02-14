import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('should render Header component', () => {
  const headerComponent = (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  render(headerComponent);

  const homeText = screen.getByText('Home', {
    selector: 'a',
  });
  expect(homeText).toBeInTheDocument();
});
