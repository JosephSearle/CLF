import '@testing-library/jest-dom';
import App from '../App';
import {render, screen} from "@testing-library/react";

test('renders app header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Climbing-Location-Finder/i);
  expect(linkElement).toBeInTheDocument();
});
