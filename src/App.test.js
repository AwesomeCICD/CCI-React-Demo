import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';

test('renders text when button is clicked', () => {
  render(<App />);
  const button = screen.getByText(/Click me to add or remove text/i);
  userEvent.click(button);
  const text = screen.getByText(/Thanks for the opportunity!/i);
  expect(text).toBeInTheDocument();
});
