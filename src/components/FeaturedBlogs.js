import React from 'react';
import './FeaturedBlogs.css'; // Import your CSS file for styling

// Import images
import image1 from '../images/image1.jpg'; // Adjust the path as necessary
import image2 from '../images/image2.jpg'; // Adjust the path as necessary
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const FeaturedBlogs = () => {
    const blogs = [
        {
            id: 1,
            title: 'Understanding AI and Machine Learning',
            description: 'A deep dive into the world of AI and how machine learning is transforming industries.',
            image: image1, // Use the imported image
            link: '#', // Replace with your blog post link
        },
        {
            id: 2,
            title: '🚀 Techathon 2.0 – 24 Hours of Non-Stop Innovation! 💻🔥',
            description: 'On February 23, I had the privilege of participating in Techathon 2.0, a 24-hour non-stop coding hackathon at AISSMS College of Engineering. ',
            image: image2, // Use the imported image
            link: '#', // Replace with your blog post link
        },
        {
            id: 3,
            title: '🚀 HackoverFlow 3.0 – 36 Hours of Non-Stop Coding Competition! 💻🔥',
            description: 'On 20 March to 23 March, I had the privilege of participating in HackoverFlow 3.0,36-hour non-stop coding hackathon at Pillai College of Engineering Panvel ',
            image: image3, // Use the imported image
            link: '#', // Replace with your blog post link
        },
        {
            id: 4,
            title: '🚀 poster presentation competition at IBM  Ice Day held at JSPM University Pune💻🔥',
            description: 'Our team has clinched first prize🥇in the poster presentation competition at IBM  Ice Day held at JSPM University Pune  .',
            image: image4, // Use the imported image
            link: '#', // Replace with your blog post link
        },
    ];

    return (
        <div className="featured-blogs">
            <h2>Featured Blogs</h2>
            <div className="blogs-container">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-description">{blog.description}</p>
                        <a href={blog.link} className="read-more">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBlogs;