import React, { useState, useEffect } from 'react';
import './AnalyticsDashboard.css'; // Import your CSS file for styling

const AnalyticsDashboard = () => {
    const [visitorStats, setVisitorStats] = useState({
        totalVisitors: 0,
        uniqueVisitors: 0,
        pageViews: 0,
        bounceRate: 0,
    });

    // Mock function to simulate fetching visitor stats
    const fetchVisitorStats = () => {
        // Simulate an API call
        setTimeout(() => {
            setVisitorStats({
                totalVisitors: 1500,
                uniqueVisitors: 1200,
                pageViews: 3000,
                bounceRate: 45, // in percentage
            });
        }, 1000);
    };

    useEffect(() => {
        fetchVisitorStats();
    }, []);

    return (
        <div className="analytics-dashboard">
            <h2>Visitor Statistics</h2>
            <div className="stats-container">
                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <h3>Total Visitors</h3>
                    <p>{visitorStats.totalVisitors}</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🌍</div>
                    <h3>Unique Visitors</h3>
                    <p>{visitorStats.uniqueVisitors}</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">📈</div>
                    <h3>Page Views</h3>
                    <p>{visitorStats.pageViews}</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">📉</div>
                    <h3>Bounce Rate</h3>
                    <p>{visitorStats.bounceRate}%</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;