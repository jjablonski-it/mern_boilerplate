const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

// Init app
const app = express();
app.use(express.json());

// Config
require("dotenv").config();
const { PORT, URI } = process.env;

// Connect to database
if (URI)
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => console.log("MongoDB connected successfully."))
    .catch(err => console.log(err));

// Routes

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
