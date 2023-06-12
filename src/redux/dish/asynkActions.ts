import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Dish } from "./types";
import i18n from "../../i18n";

// export const fetchDish = createAsyncThunk<Dish[], Record<string, string>>(
//   "pizza/fetchPizzasStatus",
//   async (params) => {
//     const { order, sortBy, category, search, currentPage } = params;
//     const { data } = await axios.get<Dish[]>(
//       `https://63527937a9f3f34c373e9fa1.mockapi.io/Items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
//     );
//     return data;
//   }
// );

export const instance = axios.create({
  baseURL: "http://localhost:4444",
});
export const fetchDish = createAsyncThunk("dish/fetchDishStatus", async () => {
  
  const {data} = await instance.get("/dish");
  return data;
});
