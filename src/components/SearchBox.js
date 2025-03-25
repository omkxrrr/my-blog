import React, { useState } from 'react';
import './SearchBox.css'; // Import the CSS file for styling

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Function to handle search submission
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        onSearch(searchTerm); // Call the onSearch function passed as a prop
    };

    return (
        <div className="search-box">
            <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    placeholder="🔍 Search blogs..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
};

export default SearchBox;