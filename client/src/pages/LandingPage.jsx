// import React from "react";
// import { Link } from "react-router-dom";

// export default function LandingPage() {
//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
//         <div className="container">
//           <Link className="navbar-brand fw-bold" to="/">StartupToolkit</Link>
//           <div>
//             <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
//             <Link className="btn btn-primary" to="/signup">Sign Up</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-light text-center py-5">
//         <div className="container">
//           <h1 className="display-4 fw-bold">Build Your Startup Toolkit with AI</h1>
//           <p className="lead text-muted">Turn your startup idea into a structured business plan in minutes.</p>
//           <Link to="/builder" className="btn btn-primary btn-lg mt-3">Start Building</Link>
//         </div>
//       </header>

//       {/* Features */}
//       <section className="py-5">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="fw-bold">What You Get</h2>
//             <p className="text-muted">Every toolkit is packed with essentials to launch your startup right.</p>
//           </div>
//           <div className="row g-4">
//             <div className="col-md-3">
//               <div className="card h-100 text-center p-3">
//                 <h5 className="fw-bold">Problem Solver</h5>
//                 <p>Define the core problem your startup addresses.</p>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card h-100 text-center p-3">
//                 <h5 className="fw-bold">Smart Solutions</h5>
//                 <p>Generate effective solutions and validate them instantly.</p>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card h-100 text-center p-3">
//                 <h5 className="fw-bold">Audience Fit</h5>
//                 <p>Define and understand your ideal customers better.</p>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card h-100 text-center p-3">
//                 <h5 className="fw-bold">AI Powered Insights</h5>
//                 <p>Use GPT-driven suggestions to speed up your toolkit creation.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How it Works */}
//       <section className="bg-light py-5">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="fw-bold">How It Works</h2>
//           </div>
//           <div className="row text-center">
//             <div className="col-md-4">
//               <div className="mb-4">
//                 <span className="badge bg-primary rounded-circle p-3">1</span>
//                 <h5 className="mt-3 fw-bold">Enter Your Idea</h5>
//                 <p className="text-muted">Give your startup a name and describe it briefly.</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="mb-4">
//                 <span className="badge bg-primary rounded-circle p-3">2</span>
//                 <h5 className="mt-3 fw-bold">Generate Toolkit</h5>
//                 <p className="text-muted">Use AI to help draft sections like problem, solution, and value prop.</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="mb-4">
//                 <span className="badge bg-primary rounded-circle p-3">3</span>
//                 <h5 className="mt-3 fw-bold">Save & Export</h5>
//                 <p className="text-muted">Save it to your dashboard or export to PDF/email.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-dark text-white py-4">
//         <div className="container d-flex justify-content-between">
//           <p className="mb-0">© 2025 StartupToolkit. All rights reserved.</p>
//           <div>
//             <Link to="/privacy" className="text-white text-decoration-none me-3">Privacy</Link>
//             <Link to="/terms" className="text-white text-decoration-none">Terms</Link>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }



// File: client/src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
}
