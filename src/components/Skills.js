import React from 'react';
import './Skills.css'; // Import your CSS file for styling

const Skills = () => {
    const skills = [
        { name: 'Communication', emoji: '🗣️', proficiency: 90 },
        { name: 'Project Management', emoji: '📊', proficiency: 85 },
        { name: 'Leadership', emoji: '👔', proficiency: 80 },
        { name: 'Teamwork', emoji: '🤝', proficiency: 85 },
        { name: 'Problem Solving', emoji: '🧩', proficiency: 90 },
    ];

    return (
        <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-container">
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                            <div className="skill-info">
                                <span>{skill.emoji} {skill.name}</span>
                                <span className="proficiency">{skill.proficiency}%</span>
                            </div>
                            <div className="progress-bar">
                                <div 
                                    className="progress" 
                                    style={{ width: `${skill.proficiency}%`, backgroundColor: getProgressColor(skill.proficiency) }}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
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

export default Skills;