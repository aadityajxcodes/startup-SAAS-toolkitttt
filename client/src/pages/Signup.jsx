// // src/pages/Signup.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/auth/register", form);
//       alert("Registered successfully! Redirecting to login...");
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.error || "Signup failed");
//     }
//   };

//   return (
//     <div className="container mt-5 col-md-4">
//       <h2 className="mb-4 text-center">Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="form-control mb-2"
//           placeholder="Name"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />
//         <input
//           className="form-control mb-2"
//           placeholder="Email"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           className="form-control mb-3"
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//         <button className="btn btn-primary w-100 mb-2">Signup</button>
//       </form>
//       <p className="text-center">
//         Already have an account? <a href="/login">Login</a>
//       </p>
//     </div>
//   );
// }



// src/pages/Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
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
        <h3 className="text-center mb-4">Signup</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control bg-dark text-white border-secondary mb-3"
            placeholder="Name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="form-control bg-dark text-white border-secondary mb-3"
            placeholder="Email"
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
          <button className="btn btn-outline-light w-100">Signup</button>
        </form>
        <p className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
          Already have an account? <a href="/login" style={{ color: "#ccc" }}>Login</a>
        </p>
      </motion.div>
    </div>
  );
}
