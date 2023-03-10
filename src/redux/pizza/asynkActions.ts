import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
   'pizza/fetchPizzasStatus',
   async (params) => {
     const { order, sortBy, category, search, currentPage } = params;
     const { data } = await axios.get<Pizza[]>(
       `https://63527937a9f3f34c373e9fa1.mockapi.io/Items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
     );
     return data;
   }
 )