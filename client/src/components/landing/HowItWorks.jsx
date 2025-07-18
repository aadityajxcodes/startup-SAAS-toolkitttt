// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   { step: 1, title: "Create Account", desc: "Sign up and access your dashboard." },
//   { step: 2, title: "Build Toolkit", desc: "Use our AI form to generate your content." },
//   { step: 3, title: "Export", desc: "Download or email the PDF to share." },
// ];

// export default function HowItWorks() {
//   return (
//     <section className="py-5 bg-light text-black">
//       <div className="container text-center">
//         <h2 className="fw-bold mb-4">How It Works</h2>
//         <div className="row">
//           {steps.map((s, i) => (
//             <motion.div
//               key={i}
//               className="col-md-4 mb-3"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2 }}
//             >
//               <div className="border rounded p-4 h-100">
//                 <div className="display-6 fw-bold text-black mb-2">{s.step}</div>
//                 <h5>{s.title}</h5>
//                 <p className="text-muted">{s.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Create Account",
    description: "Sign up and get instant access to your dashboard.",
  },
  {
    title: "Build Toolkit",
    description: "Use AI-guided forms to auto-generate startup content.",
  },
  {
    title: "Export & Share",
    description: "Download as PDF or share via email with one click.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-5 bg-white text-black">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">How It Works</h2>
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-4 h-100">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {index + 1}
                </div>
                <h5 className="fw-semibold">{step.title}</h5>
                <p className="text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
