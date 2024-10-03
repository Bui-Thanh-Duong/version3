// Route.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App'; // Import component App
import Login from './Login'; // Import component Login
import HelloBaro from './HelloBaro'; // Import component HelloBaro
import Car from './Car'; // Import component Car

const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hello" element={<HelloBaro />} />
            <Route path="/car" element={<Car />} />
            <Route path="*" element={<h1>Không tìm thấy trang web theo yêu cầu</h1>} />
        </Routes>
    );
};

export default RouteComponent;
