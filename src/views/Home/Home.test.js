import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('should render home page', () => {
  render(<Home />);
  const headerElement = screen.getByText(/Welcome to Counter Application/);
  expect(headerElement).toBeInTheDocument();
});
