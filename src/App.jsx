import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import Footer from './components/Footer.jsx'
import CrashTestRatingsPage from './pages/CrashTestRatingsPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crash-test-ratings" element={<CrashTestRatingsPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;