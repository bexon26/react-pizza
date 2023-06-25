import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4444",
  // baseURL: "https://family-food-backend-production.up.railway.app",
  headers: {
    Accepted: "appication/json",
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};

    // Now config.headers can be safely used
    config.headers.Authorization = window.localStorage.getItem("token");

    return config;
  },
  (error) => error
);

export const fetchDish = createAsyncThunk("dish/fetchDishStatus", async () => {
  const { data } = await instance.get("/dish");
  return data;
});

export const fetchRemoveDish = createAsyncThunk(
  "dish/fetchRemoveDish",
  async (_id: String) => {
    const { data } = await instance.delete(`/dish/${_id}`);
    return data
  }
);

export default instance;
