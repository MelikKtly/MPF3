import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import UserRoutes from "./routes/User.js";
import FeedbackRoutes from "./routes/Feedback.js"; // ✅ Feedback rotasını ekledik

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data

// ✅ Rotalar
app.use("/api/user/", UserRoutes);
app.use("/api/feedback", FeedbackRoutes); // ✅ Feedback endpointini ekledik

// ✅ Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// ✅ Sağlık kontrolü için basit get
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});

// ✅ Mongo bağlantısı
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

// ✅ Sunucu başlatma
const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
