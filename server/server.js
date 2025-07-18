// server/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const toolkitRoutes = require("./routes/toolkitRoutes");
const openrouterRoutes = require("./routes/openrouterRoutes");



dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/openrouter", openrouterRoutes);
app.use("/api/toolkit", toolkitRoutes);


// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});



