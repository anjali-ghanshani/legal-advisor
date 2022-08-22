import React, { useState } from "react";

function Register({ setAuth }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password, name };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json()

      localStorage.setItem("token", parseRes.token);

      setAuth(true);
      
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="align-center container mt-5 ">
      <h1 className="">Sign up</h1>
      <hr />
      <form onSubmit={onSubmitForm}>
        <input
          className="form-control my-3"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          className="form-control my-3"
          type="password"
          name="password"
          placeholder="•••••••"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <input
          className="form-control my-3"
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <button className="btn btn-success btn-block align-middle">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
