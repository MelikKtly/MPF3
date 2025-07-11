import express from "express";
import { submitFeedback, getAllFeedbacks } from "../controllers/Feedback.js";

const router = express.Router();

router.post("/", submitFeedback);
router.get("/", getAllFeedbacks); // isteğe bağlı: geri bildirimleri görüntüleme

export default router;
