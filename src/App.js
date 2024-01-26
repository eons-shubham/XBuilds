import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setLoggedIn(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>}
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
}

export default App;
