import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getClaim, getCounts, getLocation } from "./claimApi";

const initialState = {
  user: null,
  category: null,
  location: null,
  claims: {},
  dashboardCounts: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setUser: (state, action) => {
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
      .addCase(getClaim.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getClaim.fulfilled, (state, action) => {
        state.loading = false;
        state.claims = action.payload?.data?.claim;
      })
      .addCase(getClaim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.location = action.payload?.data?.location?.rows;
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload?.data?.category?.rows;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCounts.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboardCounts = action.payload?.data?.count;
      })
      .addCase(getCounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
