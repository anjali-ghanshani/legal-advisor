import React from "react";

function Register({ setAuth }) {
  return (
    <div>
      <h1>Register</h1>
      <button className="btn btn-danger" onClick={() => setAuth(false)}>logout</button>
    </div>
  );
}

export default Register;
