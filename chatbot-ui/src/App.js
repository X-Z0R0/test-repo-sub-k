import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import './App.css'; 


const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Chatbot Section */}
        <div className="chatbot-container">
          <Chatbot />
        </div>

        {/* Main Content Section */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
