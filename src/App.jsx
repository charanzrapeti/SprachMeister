// App.jsx
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import OverviewPage from './components/OverviewPage';
import AuthPage from './components/AuthPage';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
  
    <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/overview" element={<OverviewPage/>}/>
          <Route exact path="/auth" element={<AuthPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
     
    </Router>
  );
}

export default App;
