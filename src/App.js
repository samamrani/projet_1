import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Notes from './pages/Notes';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notes" element={<Notes />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
