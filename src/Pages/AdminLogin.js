import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                localStorage.setItem("isAdmin", "true");
                navigate("/admin");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please try again later.");
        }
    };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Admin Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;