import React from "react";

function Login({setAuth}) {
  return (
    <div>
      <h1>Login</h1>
      <button className="btn btn-primary" onClick={() => setAuth(true)}>Authenticate</button>
    </div>
  );
}

export default Login;
