import Dashboard from "./pages/Dashboard";



import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ToolkitBuilder from "./pages/ToolkitBuilder";
import LandingPage from "./pages/LandingPage";



export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/builder" element={<ToolkitBuilder />} />

</Routes>
</BrowserRouter>
);
}