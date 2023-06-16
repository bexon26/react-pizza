import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../dish/types";
import { RootState } from "../store";
import { Auth } from "./types";
import instance from "../dish/asynkActions";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: { email: String; password: String }) => {
    const { data } = await instance.post("/auth/login", params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: { fullName: String; email: String; password: String }) => {
    const { data } = await instance.post("/auth/register", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await instance.get("/auth/me");
  return data;
});

export const initialState = {
  data: { admin: false },
  status: Status.LOADING, // loading | success | error
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state.data = { admin: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state, action) => {
      state.status = Status.LOADING;
      state.data = { admin: false };
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.data = { admin: false };
    });
    builder.addCase(fetchAuthMe.pending, (state, action) => {
      state.status = Status.LOADING;
      state.data = { admin: false };
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchAuthMe.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.data = { admin: false };
    });
    builder.addCase(fetchRegister.pending, (state, action) => {
      state.status = Status.LOADING;
      state.data = { admin: false };
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.data = { admin: false };
    });
  },
});
export const selectIsAuth = (state: RootState) =>
  Object.keys(state.auth.data).length === 1 ? false : true;
export const selectIsAuthAdmin = (state: RootState) => state.auth.data.admin;
export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
