import React, { useState, useEffect } from "react";
import logo from "./react-logo.svg";
import nodejsLogo from "./nodejs-logo.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users));
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Node Template</h1>
        <p>
          Good dole LambastR
        </p>
        <div className="logo-box">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={nodejsLogo} className="Node-logo" alt="nodejsLogo" />
        </div>
        <p>
          Edit <code>client/src/App.js</code> and save to reload React app.
        </p>
        <p>
          Edit <code>client/server/routes/api.js</code> and save to reload
          Node.js app.
        </p>
        <br />
        <p>
          <code>GET /api/users</code>:{" "}
          {users.length ? users.join(", ") : "loading..."}
        </p>
        <br />      </header>
    </div>
  );
}

export default App;
