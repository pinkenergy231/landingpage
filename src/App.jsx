import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LinksPage from './pages/LinksPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
