const mongoose = require("mongoose");

const ToolkitSchema = new mongoose.Schema({
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},
title: String,
problem: String,
solution: String,
targetAudience: String,
valueProp: String,
createdAt: {
type: Date,
default: Date.now,
},
});

module.exports = mongoose.model("Toolkit", ToolkitSchema);