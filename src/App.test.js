import { render, screen } from '@testing-library/react';
import App from './App';

test('renders new Todo Form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add New Todo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders light mode', () => {
  render(<App />);
  const linkElement = screen.getByText(/light mode/i);
  expect(linkElement).toBeInTheDocument();
});
