// @ts-nocheck

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "KIDDOVERSE backend is running! 🧸",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "KIDDOVERSE API is healthy 🚀",
  });
});

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Centralized error handler
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`KIDDOVERSE backend running on http://localhost:${PORT}`);
});