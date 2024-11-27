import { createAsyncThunk } from "@reduxjs/toolkit";

export const userApi = {
  getUser: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/emp/get-user-details`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return response.json();
  },
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      return await userApi.getUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
