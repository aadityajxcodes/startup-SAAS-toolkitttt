import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black border-bottom border-light">
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">
          StartupToolkit
        </a>
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
