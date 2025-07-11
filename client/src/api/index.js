import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Yeni eklenenler
export const updateProfile = async (token, data) =>
  await API.put("/user/profile", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getProfile = async (token) =>
  await API.get("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

  export const submitFeedback = async (data) => 
    await API.post("/feedback", data);
  
