import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePubView from './components/HomePubView.js';
import HomeAuthView from './components/HomeAuthView.js';
import LearnerDashboard from './components/LearnerDashboard';
import ReviewerDashboard from './components/ReviewerDashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePubView />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/authenticated" element={<HomeAuthView />} />
      <Route path="/LearnerDashboard" element={<LearnerDashboard />} />
      <Route path="/ReviewerDashboard" element={<ReviewerDashboard />} />
    </Routes>
  );
}

export default App;
