const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const authRoutes = require("./routes/auth");

require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Enable CORS for all origins
app.use(cors());
app.options("*", cors()); // preflight support

// ✅ Middleware
app.use(bodyParser.json());

// ✅ Routes
