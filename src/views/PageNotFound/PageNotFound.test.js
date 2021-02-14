import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

test('should render 404 page', () => {
  const component = (<MemoryRouter><PageNotFound /></MemoryRouter>);
  render(component);

  const headerElement = screen.getByText(/Page Not Found/);
  expect(headerElement).toBeInTheDocument();

  const button = screen.getByText('Go to Home', {
    selector: 'a',
  });
  expect(button).toBeInTheDocument();
});
