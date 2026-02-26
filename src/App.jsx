import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import CreateOpportunity from "./pages/CreateOpportunity";
import Profile from "./pages/Profile";
import Opportunities from "./pages/Opportunities";
import Saved from "./pages/Saved";
import MyOpportunities from "./pages/MyOpportunities";
import MyApplications from "./pages/MyApplications";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createopportunity" element={<CreateOpportunity />} />
          <Route path="/opportunity" element={<Opportunities />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/myopportunities" element={<MyOpportunities />} />
          <Route path="/applications" element={<MyApplications />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
