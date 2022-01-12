import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const title = screen.getByText(/The Ultimate Game of Life/i);
  expect(title).toBeInTheDocument();
});
