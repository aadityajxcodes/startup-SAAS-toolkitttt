// // src/pages/Login.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       alert("Login successful!");
//       navigate("/dashboard"); // redirect after login
//     } catch (err) {
//       alert(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div className="container mt-5 col-md-4">
//       <h2 className="mb-4 text-center">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="form-control mb-2"
//           placeholder="Email"
//           type="email"
//           required
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           className="form-control mb-3"
//           type="password"
//           placeholder="Password"
//           required
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//         <button className="btn btn-success w-100 mb-2" type="submit">
//           Login
//         </button>
//       </form>
//       <p className="text-center">
//         Don’t have an account? <a href="/signup">Signup</a>
//       </p>
//     </div>
//   );
// }



// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", background: "#000" }}>
      <motion.div
        className="p-4 rounded text-white"
        style={{ backgroundColor: "#111", width: "100%", maxWidth: "400px", border: "1px solid #333" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control bg-dark text-white border-secondary mb-3"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="form-control bg-dark text-white border-secondary mb-4"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="btn btn-outline-light w-100" type="submit">Login</button>
        </form>
        <p className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
          Don’t have an account? <a href="/signup" style={{ color: "#ccc" }}>Signup</a>
        </p>
      </motion.div>
    </div>
  );
}
