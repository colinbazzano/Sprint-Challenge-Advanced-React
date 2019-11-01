import React from 'react';
import { useDarkMode } from './useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Meet The Players!</h1>
            <div className="dark-mode__toggle">
            <button onClick={toggleDark} className={darkMode ? 'toggle toggled' : 'toggle'}>Change Light Mode</button>
            </div>
        </nav>
    );
};

export default Navbar;