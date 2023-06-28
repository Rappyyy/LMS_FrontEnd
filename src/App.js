import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePubView from './components/HomePubView.js';
import HomeAuthView from './components/HomeAuthView.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePubView />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/authenticated" element={<HomeAuthView />} />
    </Routes>
  );
}

export default App;
