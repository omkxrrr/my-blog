import React from 'react';
import Header from './components/Header';
import About from './components/About';
import FeaturedBlogs from './components/FeaturedBlogs';
import Categories from './components/Categories';
import SearchBox from './components/SearchBox';
import './App.css'; // Import your CSS file for styling
import DarkModeToggle from './components/DarkModeToggle';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Skills from './components/Skills';

const App = () => {
    return (
        <div>
            <Header />
            <DarkModeToggle />
            <main>
                <SearchBox />
                <About />
                <FeaturedBlogs />
                <Categories />
                <Skills/>
                <AnalyticsDashboard/>
                
            </main>
        </div>
    );
};

export default App;