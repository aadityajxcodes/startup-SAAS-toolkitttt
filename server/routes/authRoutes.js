const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const verifyToken = require("../middleware/verifyToken");
const User = require("../models/User");

router.post("/register", register);
router.post("/login", login);

// ✅ Protected route to get logged-in user
router.get("/me", verifyToken, async (req, res) => {
try {
const user = await User.findById(req.user.id).select("-password");
res.json(user);
} catch {
res.status(500).json({ error: "Failed to fetch user" });
}
});

module.exports = router;