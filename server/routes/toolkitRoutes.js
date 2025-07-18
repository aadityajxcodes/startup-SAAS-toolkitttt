const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const Toolkit = require("../models/Toolkit");



router.post("/", verifyToken, async (req, res) => {
  try {
    console.log("Received body:", req.body);
    console.log("User ID from token:", req.user?.id);

    if (
      !req.body.title ||
      !req.body.problem ||
      !req.body.solution ||
      !req.body.targetAudience ||
      !req.body.valueProp
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newToolkit = new Toolkit({
      ...req.body,
      user: req.user.id,
    });

    await newToolkit.save();
    res.status(200).json({ message: "Toolkit saved" });
  } catch (err) {
    console.error("❌ Failed to save toolkit:", err.message);
    res.status(500).json({ error: "Failed to save" });
  }
});


module.exports = router;