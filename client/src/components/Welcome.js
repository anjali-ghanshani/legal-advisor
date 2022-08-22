import React, { useEffect, useState } from "react";

function Welcome({ setAuth }) {
  const [name, setName] = useState("");

  async function getName() {
      try {
          const response = await fetch("http://localhost:5000/dashboard", {
              method: "GET",
              headers: { token: localStorage.token}
          })

          const parseRes = await response.json();

          console.log(parseRes)
          setName(parseRes.user_name)
      } catch (err) {
          console.error(err.message)
      }
  }

  useEffect(() => {
      getName();
  },[])

  return <h1>Welcome {name}!</h1>;
}

export default Welcome;
