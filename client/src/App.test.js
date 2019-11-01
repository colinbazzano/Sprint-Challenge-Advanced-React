import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// local imports
import Display from './components/Display';
import Navbar from './components/Navbar';

describe('Dark Mode Test', () => {
  test('if you click the button Change Light Mode it adds the toggle toggled', () => {
    const { getByTestId } = render(<Navbar />);

    fireEvent.click(getByTestId('darkModeButton'));
    expect(getByTestId('darkModeButton')).toHaveClass('toggle toggled');
  })
})

describe('Navbar Header Test', () => {
  test('if the header says Meet The Players!', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('navbar-header')).toHaveTextContent(/meet the players!/i);
  })
})

describe('Player Country Test', () => {
  test('if the div for rendered players has the class name of players', () => {
    const { getByTestId } = render(<Display />);

    expect(getByTestId('players')).toHaveClass('players');
  })
})


it('renders without crashing', () => {
  render(<App />)
});
