import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Counter from './Counter';

test('should render the Counter component', () => {
  const { getByTestId, getByText } = render(<Counter />);
  const counterValEl = getByTestId('counter-val');

  const minusTwoButtonEl = getByText('-2', {
    selector: 'button',
  });
  const minusOneButtonEl = getByText('-1', {
    selector: 'button',
  });
  const plusOneButtonEl = getByText('+1', {
    selector: 'button',
  });
  const plusTwoButtonEl = getByText('+2', {
    selector: 'button',
  });
  const resetButton = getByText('RESET', {
    selector: 'button',
  });

  expect(counterValEl).toHaveTextContent('0');
  fireEvent.click(minusTwoButtonEl);

  expect(counterValEl).toHaveTextContent('-2');
  fireEvent.click(minusOneButtonEl);

  expect(counterValEl).toHaveTextContent('-3');
  fireEvent.click(plusOneButtonEl);

  expect(counterValEl).toHaveTextContent('-2');
  fireEvent.click(plusTwoButtonEl);

  expect(counterValEl).toHaveTextContent('0');
  fireEvent.click(resetButton);
  expect(counterValEl).toHaveTextContent('0');
});
