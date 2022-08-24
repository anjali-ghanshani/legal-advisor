import React, { useEffect, useState } from "react";

// components

import SetAppointment from "./SetAppointment";
import ListAppointments from "./ListAppointments";

function Welcome({ setAuth }) {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      console.log(parseRes);
      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div>
      <h2>Welcome {name}!</h2>
      <button onClick={(e) => logout(e)} className="btn btn-primary">
        log out
      </button>
      <SetAppointment />
      <ListAppointments />
    </div>
  );
}

export default Welcome;
