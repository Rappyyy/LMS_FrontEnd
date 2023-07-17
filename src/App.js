import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePubView from "./components/HomePubView.js";
import HomeAuthView from "./components/HomeAuthView.js";
import LearnerDashboard from "./components/LearnerDashboard.js";
import ReviewerDashboard from "./components/ReviewerDashboard.js";
import RegisterForm from "./components/RegisterForm";
import RouteToLogin from "./components/RouteToLogin";

function App() {
  // Replace this with the logic to retrieve the userType from the token or wherever it is stored
  const userType = "ROLE_REVIEWER"; // Example userType

  return (
    <Routes>
      <Route path="/" element={<HomePubView />} />
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/authenticated"
        element={<HomeAuthView userType={userType} />} // Pass the userType as a prop
      />
      <Route
        path="/LearnerDashboard"
        element={<LearnerDashboard />} // Make sure the component name matches the imported file name
      />
      <Route
        path="/ReviewerDashboard"
        element={<ReviewerDashboard />} // Make sure the component name matches the imported file name
      />
      <Route path="/RegisterForm" element={<RegisterForm />} />
      <Route path="/RouteToLogin" element={<RouteToLogin />} />
    </Routes>
  );
}

export default App;
