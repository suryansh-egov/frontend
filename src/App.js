// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SORCalculation from './components/SORCalculation';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sor-calculation" element={<SORCalculation />} />
            </Routes>
        </Router>
    );
};

export default App;
