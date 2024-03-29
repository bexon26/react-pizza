import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCart, fetchDish,  fetchDishCount,  fetchRemoveDish } from "./asynkActions";
import { Dish, DishSliceState, Status } from "./types";

export const initialState: DishSliceState = {
  items1: [],
  count:0,
  status: Status.LOADING, // loading | success | error
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Dish[]>) {
      state.items1 = action.payload;
    },
    // removeDish(state, action) {
    //   state.items1 = state.items1.filter((obj) => {
    //     console.log(obj._id,action.payload);
    //     return obj._id === action.payload;
    //   });
    // },
  },
  extraReducers: (builder) => {
    //Получение блюда
    builder.addCase(fetchDish.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items1 = [];
    });
    builder.addCase(fetchDish.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items1 = action.payload;
    });
    builder.addCase(fetchDish.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items1 = [];
    });
    // Удаление блюда
    builder.addCase(fetchRemoveDish.pending, (state, action) => {
      // console.log(action)
      state.items1 = state.items1.filter(obj => obj._id !== action.meta.arg);
    });
    //  Получение количества блюд
   
    builder.addCase(fetchDishCount.fulfilled, (state, action) => {
      
       state.count = Number(action.payload);
    });
    
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = dishSlice.actions;

export default dishSlice.reducer;
