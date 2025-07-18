// import React from "react";
// import { motion } from "framer-motion";
// import "./HeroSection.css";

// export default function HeroSection() {
//   return (
//     <section className="hero-section d-flex align-items-center justify-content-center text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-white"
//       >
//         <h1 className="display-4 fw-bold">Build Your Startup Toolkit</h1>
//         <p className="lead">Elegant. Simple. AI-powered.</p>
//         <a href="/signup" className="btn btn-outline-light btn-lg mt-3">Get Started</a>
//       </motion.div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="display-4 fw-bold mb-3">Build Your Startup Toolkit in Minutes</h1>
        <p className="lead mb-4">Elegant. Smart. Instant. Let AI power your startup strategy.</p>
        <a href="/signup" className="btn btn-outline-light btn-lg px-4">
          Get Started
        </a>
      </motion.div>
    </section>
  );
}
