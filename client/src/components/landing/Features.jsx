import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Generated Content",
    desc: "Generate tailored startup plans using OpenRouter’s AI.",
  },
  {
    title: "PDF & Email Export",
    desc: "Seamlessly export or share your toolkit with others.",
  },
  {
    title: "Fully Customizable",
    desc: "Edit and refine every section with total control.",
  },
];

export default function Features() {
  return (
    <section className="bg-black text-white py-5">
      <div className="container text-center">
        <motion.h2
          className="fw-bold display-5 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What You Get
        </motion.h2>

        <div className="row justify-content-center g-4">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="p-4 h-100 border border-light rounded-4 bg-black hover-glow"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="text-white-50 fs-6">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
          .hover-glow:hover {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
            background-color: #111;
            transform: translateY(-4px);
          }
        `}
      </style>
    </section>
  );
}
