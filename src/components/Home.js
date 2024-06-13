// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Screen</h1>
            <Link to="/sor-calculation">Go to SOR Calculation</Link>
        </div>
    );
};

export default Home;
