// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import RouteComponent from './Route'; // Import component RouteComponent

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <RouteComponent /> {/* Sử dụng RouteComponent để định nghĩa các route */}
        </Router>
    </React.StrictMode>
);
