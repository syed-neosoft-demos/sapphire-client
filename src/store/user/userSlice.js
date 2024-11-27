import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./userApi";

const initialState = {
  auth: {
    accessToken: null,
    refreshToken: null,
  },
  user: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.auth = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = {
          accessToken: action.payload?.data?.accessToken,
          refreshToken: action.payload?.data?.refreshToken,
        };
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
