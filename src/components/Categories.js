import React from 'react';
import './Categories.css'; // Import your CSS file for styling

const Categories = () => {
    

    const languages = [
        { name: 'HTML', emoji: '🌐', proficiency: 90 },
        { name: 'CSS', emoji: '🎨', proficiency: 85 },
        { name: 'Java', emoji: '☕', proficiency: 75 },
        { name: 'JavaScript', emoji: '💻', proficiency: 80 },
        { name: 'Bootstrap', emoji: '🚀', proficiency: 90 },
        { name: 'C/C++', emoji: '🔧', proficiency: 90 },
        { name: 'Data Structures', emoji: '📚', proficiency: 80 },
    ];

    return (
        <div className="categories-section">
            <h2>Languages</h2>
            <div className="categories-container">
               
                <div className="category-group">
                    <h3>Programming Languages</h3>
                    <ul>
                        {languages.map((language, index) => (
                            <li key={index} className="language-item">
                                <div className="language-info">
                                    <span>{language.emoji} {language.name}</span>
                                    <span className="proficiency">{language.proficiency}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div 
                                        className="progress" 
                                        style={{ width: `${language.proficiency}%`, backgroundColor: getProgressColor(language.proficiency) }}
                                    ></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

// Function to determine the color of the progress bar based on proficiency
const getProgressColor = (proficiency) => {
    if (proficiency >= 80) return '#4caf50'; // Green for high proficiency
    if (proficiency >= 60) return '#ff9800'; // Orange for medium proficiency
    return '#f44336'; // Red for low proficiency
};

export default Categories;