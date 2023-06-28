import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePubView from './components/HomePubView';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePubView />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
