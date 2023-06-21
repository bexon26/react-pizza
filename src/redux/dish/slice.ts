import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchDish, fetchRemoveDish } from "./asynkActions";
import { Dish, DishSliceState, Status } from "./types";

export const initialState: DishSliceState = {
  items1: [],
  status1: Status.LOADING, // loading | success | error
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
      state.status1 = Status.LOADING;
      state.items1 = [];
    });
    builder.addCase(fetchDish.fulfilled, (state, action) => {
      state.status1 = Status.SUCCESS;
      state.items1 = action.payload;
    });
    builder.addCase(fetchDish.rejected, (state, action) => {
      state.status1 = Status.ERROR;
      state.items1 = [];
    });
    // Удаление блюда
    builder.addCase(fetchRemoveDish.pending, (state, action) => {
      console.log(action)
      state.items1 = state.items1.filter(obj => obj._id !== action.meta.arg);
    });
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = dishSlice.actions;

export default dishSlice.reducer;
