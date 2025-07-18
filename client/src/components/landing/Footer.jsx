import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container text-center">
        <p className="mb-1 fw-light">
          &copy; {new Date().getFullYear()} <span className="fw-semibold">StartupToolkit</span>. All rights reserved.
        </p>
        <div>
            
          <a href="https://github.com/aadityajxcodes" className="text-white text-decoration-none mx-2">
             Built By aadityajxcodes
          </a>
          <span></span>
          <a href="#" className="text-white text-decoration-none mx-2">
            
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
