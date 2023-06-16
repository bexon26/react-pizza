import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";


const instance = axios.create({
  baseURL: "http://localhost:4444",
  headers: {
    Accepted: 'appication/json',
    'Content-Type': 'application/json',
  },
});
instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};

    // Now config.headers can be safely used
    config.headers.Authorization = window.localStorage.getItem('token')

    return config;
  },
  (error) =>error
  );

export const fetchDish = createAsyncThunk("dish/fetchDishStatus", async () => {
  const {data} = await instance.get("/dish");
  return data;
});

export default instance;
  