const express = require("express");
const cors = require("cors");
const path = require("path");
const { Server } = require("socket.io");
require("dotenv").config();
require("./db/conn");
require("./controllers/socket");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const notificationRouter = require("./routes/notificationRouter");

const app = express();
const port = process.env.PORT || 5015;

// Request Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// CORS Policy Setup
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, // Allows cookies and Authorization headers
};
app.use(cors(corsOptions));

// JSON Body Parsing Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "./client/build")));

// Catch-all route handler for any requests that don’t match your API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the Server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
