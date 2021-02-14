import React from 'react';
import { screen, render } from '@testing-library/react';
import Footer from './Footer';

test('should render Footer component', () => {
  render(<Footer />);
  const footerText = screen.getByText(/React AWS CodePipeline Demo/, {
    selector: 'strong',
  });
  expect(footerText).toBeInTheDocument();

  const githubText = screen.getByText(/Pasham Akhil Kumar Reddy/, {
    selector: 'a',
  });
  expect(githubText).toBeInTheDocument();
});
