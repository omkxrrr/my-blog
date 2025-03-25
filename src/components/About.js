
import React from 'react';
import './About.css'; // Import the CSS file for styling
import profileImage from '../assets/profile.jpg'; // Import the image

const About = () => {
    return (
        <section id="about" className="about-section">
            {/* <h2>About Me</h2> */}
            <div className="card">
                <div className="card-content">
                    <img src={profileImage} alt="Omkar D. Mede" className="profile-pic" />
                    <div className="about-text">
                        <h3>Hi, I'm Omkar D. Mede!</h3>
                        <p>
                            I'm a student at <strong>JSPM University, Wagholi, Pune</strong>, currently in my <strong>3rd year of Computer Science Engineering</strong>.
                        </p>
                        <p>I have successfully attained a diploma from Government Polytechnic Aurangabad and have chosen to pursue a Bachelor of Technology in Information Technology at JSPM University, 
                            Pune, to further advance my academic qualifications.</p>
                    </div>
                    <div className="social-media">
    <h3>Connect with Me</h3>
    <div className="social-buttons">
        <a href="https://in.linkedin.com/in/omkar-mede-18961b258" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
            🤝 LinkedIn
        </a>
        <a href="https://github.com/omkxrrr" target="_blank" rel="noopener noreferrer" className="social-button github">
            🐱 GitHub
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-button twitter">
            🐦 Twitter
        </a>
        <a href="https://www.instagram.com/omkxrrr1/" target="_blank" rel="noopener noreferrer" className="social-button instagram">
            📸 Instagram
        </a>
        <a href="https://www.youtube.com/channel/UCuOi7e9Drelh1gTbGvBRN7g" target="_blank" rel="noopener noreferrer" className="social-button youtube">
            📺 YouTube
        </a>
    </div>
</div>
                </div>
            </div>

          

            <div className="lifestyle-section card">
                <h3>My Lifestyle</h3>
                <p>
                    When I'm not studying, you can find me coding, experimenting with new technologies, or enjoying outdoor activities. 
                    I believe in maintaining a balanced lifestyle, which includes regular exercise, reading, and spending time with friends and family.
                </p>
            </div>

            <div className="interests-section card">
                <h3>My Interests</h3>
                <ul>
                    <li>
                        <strong>1. Programming & Development</strong>
                        <ul>
                            <li>Beginner Guides: C, Python, JavaScript basics</li>
                            <li>Advanced Topics: Algorithms, Competitive Programming tricks</li>
                            <li>Projects & Tutorials: AI-based projects, Web apps</li>
                            <li>Open-Source Contributions: How to contribute & your experience</li>
                        </ul>
                    </li>
                    <li>
                        <strong>2. AI & Machine Learning</strong>
                        <ul>
                            <li>AI/ML Basics: Neural Networks, NLP, Computer Vision</li>
                            <li>AI Tools & Libraries: TensorFlow, PyTorch, Scikit-learn</li>
                            <li>Fake News Detector Project: Your implementation & challenges</li>
                        </ul>
                    </li>
                    <li>
                        <strong>3. Cybersecurity & Ethical Hacking</strong>
                        <ul>
                            <li>Basics of Cybersecurity: How to stay safe online</li>
                            <li>Ethical Hacking: Tools, methodologies, and resources</li>
                            <li>CTF Writeups: Your experiences in cybersecurity challenges</li>
                        </ul>
                    </li>
                    <li>
                        <strong>4. Tech Community & Events</strong>
                        <ul>
                            <li>Coding Competitions: Your journey in CodeChef, LeetCode, etc.</li>
                            <li>Tech Conferences & Meetups: Summaries, key takeaways</li>
                            <li>Hackathons & Project Building: Tips for winning hackathons</li>
                        </ul>
                    </li>
                    <li>
                        <strong>5. Freelancing & Career Growth</strong>
                        <ul>
                            <li>Freelancing Tips: How to start & get clients</li>
                            <li>Tech Resume Building: How to create an impressive resume</li>
                            <li>Internship Experiences: Your personal learnings & advice</li>
                        </ul>
                    </li>
                    <li>
                        <strong>6. Personal Tech Blogs</strong>
                        <ul>
                            <li>Your Journey in CS: Challenges & achievements</li>
                            <li>Day in the Life of a CS Student</li>
                            <li>Future Tech Trends: AI, Blockchain, Metaverse, Quantum Computing</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="tech-journey card">
                <h3>My Tech Journey</h3>
                <div className="tech-journey-content">
                    <div className="tech-item">
                        <span className="tech-icon">📚</span>
                        <div className="tech-description">
                            <h4>100+ DSA Problems Solved</h4>
                            <p>Mastered data structures and algorithms through extensive problem-solving.</p>
                        </div>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">🛠️</span>
                        <div className="tech-description">
                            <h4>Full-Stack Developer (MERN Stack)</h4>
                            <p>Developed dynamic web applications using MongoDB, Express.js, React, and Node.js.</p>
                        </div>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">📝</span>
                        <div className="tech-description">
                            <h4>Technical Content Creator</h4>
                            <p>Creating tutorials and articles to share knowledge with the tech community.</p>
                        </div>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">🏆</span>
                        <div className="tech-description">
                            <h4>Hackathon Winner (CodeFest 2025)</h4>
                            <p>Achieved first place in a competitive hackathon, showcasing innovative solutions.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="college-journey card">
    <h3>Education</h3>
    <div className="college-journey-content">
        <div className="college-item">
            <span className="college-icon">🏫</span>
            <div className="college-description">
                <h4>1. Shri Saraswati Vidhyalay, Gangakhed, Parbhani</h4>
                <p>(1st Standard to 10th - Completed)</p>
            </div>
        </div>
        <div className="college-item">
            <span className="college-icon">🎓</span>
            <div className="college-description">
                <h4>2. Government Polytechnic College, Sambhaji Nagar</h4>
                <p>(2020 to 2023 in Information Technology - Completed)</p>
            </div>
        </div>
        <div className="college-item">
            <span className="college-icon">🏢</span>
            <div className="college-description">
                <h4>3. JSPM University, Wagholi, Pune</h4>
                <p>(2023 to 2026 in Computer Science Engineering - In 3rd Year)</p>
            </div>
        </div>
    </div>
</div>

            {/* Social Media Section */}
            {/* Social Media Section */}

        </section>
    );
};

export default About;