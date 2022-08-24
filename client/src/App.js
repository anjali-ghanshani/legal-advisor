import React, { Fragment, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

// components

import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Booking from "./components/Booking";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login setAuth={setAuth} />
                ) : (
                  <Navigate to="/appointments" />
                )
              }
            />
            <Route
              exact
              path="/register"
              element={
                !isAuthenticated ? (
                  <Register setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/bookings" element={<Booking />} />
            <Route
              exact
              path="/appointments"
              element={
                <div>
                  <Welcome setAuth={setAuth} />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
