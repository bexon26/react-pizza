import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchDish } from "./asynkActions";
import { Dish, DishSliceState, Status } from "./types";

export const initialState: DishSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Dish[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDish.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchDish.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchDish.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = dishSlice.actions;

export default dishSlice.reducer;
