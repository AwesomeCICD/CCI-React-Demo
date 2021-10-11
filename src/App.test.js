import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/svelte';
import App from './App';

test('renders text when button is clicked', () => {
  render(<App />);
  const button = screen.getByText(/Click me to add or remove text/i);
  fireEvent.click(button)
  const text = screen.getByText(/Thanks for the opportunity!/i)
  expect(text).toBeInTheDocument();
});
