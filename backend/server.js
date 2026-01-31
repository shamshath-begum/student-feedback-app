// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// // Schema
// const feedbackSchema = new mongoose.Schema({
//   name: String,
//   message: String
// });

// const Feedback = mongoose.model("Feedback", feedbackSchema);

// // Routes
// app.post("/feedback", async (req, res) => {
//   const data = await Feedback.create(req.body);
//   res.json(data);
//   console.log(data);
  
// });

// app.get("/feedback", async (req, res) => {
//   const data = await Feedback.find();
//   res.json(data);
// });

// app.listen(process.env.PORT, () => {
//   console.log("Backend running on port", process.env.PORT);
// });
// ------------------------------------
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/feedback-app")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema & Model
const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// app.use((req, res, next) => {
//   console.log("URL hit:", req.method, req.url);
//   next();
// });


// ✅ ROUTES (MUST BE BEFORE app.listen)
app.get("/feedback", async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
});

app.post("/feedback", async (req, res) => {
  const data = await Feedback.create(req.body);
  res.json(data);
  console.log(data);
  
});

// Server start
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend running");
});
// ---------------------
