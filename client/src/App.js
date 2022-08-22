import React, { Fragment, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

// components

import SetAppointment from "./components/SetAppointment";
import ListAppointments from "./components/ListAppointments";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome"

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
                !isAuthenticated ? <Login setAuth={setAuth}/> : <Navigate to="/appointments" />
              }
            />
            <Route
              exact
              path="/register"
              element={
                !isAuthenticated ? <Register setAuth={setAuth}/> : <Navigate to="/login" />
              }
            /> 
            <Route
              exact
              path="/appointments"
              element={
                isAuthenticated ? (
                  <div>
                  <Welcome />
                    <SetAppointment />
                    <ListAppointments />
                  </div>
                ) : (
                  <Navigate to="/register" />
                )
              }
            />
          </Routes>
          {/* <SetAppointment />
          <br />
          <ListAppointments /> */}
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
