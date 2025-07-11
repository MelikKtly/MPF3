import Feedback from "../models/Feedback.js";
import { createError } from "../error.js";

export const submitFeedback = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback received successfully." });
  } catch (err) {
    next(createError(500, "Failed to submit feedback"));
  }
};

export const getAllFeedbacks = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    next(createError(500, "Failed to retrieve feedbacks"));
  }
};
