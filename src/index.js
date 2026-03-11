/**
 * Entry point for the React application
 * This file initializes and renders the root component
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Create root element and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Display console message indicating successful load
console.log('Interactive Task Manager - Application Loaded Successfully');
console.log('Demonstrating: ES6 Arrays, Recursion, Exception Handling, and more!');