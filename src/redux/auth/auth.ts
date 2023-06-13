import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { instance } from "../dish/asynkActions";
import { Status } from "../dish/types";
import { RootState } from "../store";
import { Auth } from "./types";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: { email: String; password: String }) => {
    const { data } = await instance.post("/auth/login", params);
    return data;
  }
);

export const initialState = {
  data: {},
  status: Status.LOADING, // loading | success | error
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setItems(state, action: PayloadAction<Auth>) {
    //   state.data = action.payload;
    // },
    logOut(state) {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state, action) => {
      state.status = Status.LOADING;
      state.data = {};
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.data = {};
    });
  },
});
export const selectIsAuth = (state: RootState) =>
  Object.keys(state.auth.data).length === 0 ? false : true;
export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
