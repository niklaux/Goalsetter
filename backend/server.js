const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

// connect to database function
connectDB();

const app = express();

// Accept body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler); // overwrite default express error handler.

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
