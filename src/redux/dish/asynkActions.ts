import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import { Dish } from "./types";

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

export const fetchDish = createAsyncThunk<Dish[], Record<string, string>>(
  "dish/fetchDishStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    // console.log(params)
    const { data } = await instance.get<Dish[]>(
      `/dish?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

export const fetchDishCount = createAsyncThunk(
  "dish/fetchDishCount",
  async () => {
    const { data } = await instance.get(`/dish/count`);
    return data;
  }
);
export const fetchRemoveDish = createAsyncThunk(
  "dish/fetchRemoveDish",
  async (_id: String) => {
    const { data } = await instance.delete(`/dish/${_id}`);
    return data;
  }
);

export default instance;
