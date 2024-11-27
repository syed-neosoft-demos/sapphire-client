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

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.auth = action.payload;
      state.user = action.payload;
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
        console.log("action :>> ", action.payload?.data);
        state.auth = action.payload?.data;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
