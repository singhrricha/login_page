import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Details from "./components/Details";
import Errror from "./components/Errror";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentRegistrationForm from "./components/FormPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const isLoggedInStorage = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(isLoggedInStorage === "true");
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user_login");
    localStorage.removeItem("forms");
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/stdresform" />} />
            <Route path="/stdresform" element={<StudentRegistrationForm />} />
          </>
        )}
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </>
  );
};

export default App;
