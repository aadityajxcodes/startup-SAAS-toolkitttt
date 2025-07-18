// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Logout handler
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Fetch user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="mb-3">Welcome, {user.name} 👋</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <button className="btn btn-danger mt-3" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
