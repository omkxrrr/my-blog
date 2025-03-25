import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css'; // Import your CSS file for styling

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load the theme from local storage on initial render
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedMode);
        document.body.classList.toggle('dark-mode', savedMode);
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode); // Save the mode in local storage
            document.body.classList.toggle('dark-mode', newMode);
            return newMode;
        });
    };

    return (
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '🌙 Light Mode' : '🌞 Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;