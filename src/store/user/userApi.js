import { createAsyncThunk } from "@reduxjs/toolkit";

export const userApi = {
  signup: async (userData) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    return response.json();
  },
  login: async (userData) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    return response.json();
  },
  forgetPassword: async (userData) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/auth/forget-password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    return response.json();
  },
  resetPassword: async (userData) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("temp_token")}`,
        },
        body: JSON.stringify(userData),
      }
    );
    return response.json();
  },
  getDepartment: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/auth/get-department`,
      {
        method: "GEt",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("temp_token")}`,
        },
      }
    );
    return response.json();
  },
  getDesignation: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/auth/get-designation`,
      {
        method: "GEt",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("temp_token")}`,
        },
      }
    );
    return response.json();
  },
};

export const userSignup = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      return await userApi.signup(userData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const userLogin = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      return await userApi.login(userData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const forgetPassword = createAsyncThunk(
  "user/forget-password",
  async (userData, { rejectWithValue }) => {
    try {
      return await userApi.forgetPassword(userData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "user/reset-password",
  async (userData, { rejectWithValue }) => {
    try {
      return await userApi.resetPassword(userData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDepartment = createAsyncThunk(
  "user/get-department",
  async (_, { rejectWithValue }) => {
    try {
      return await userApi.getDepartment();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDesignation = createAsyncThunk(
  "user/get-department",
  async (_, { rejectWithValue }) => {
    try {
      return await userApi.getDesignation();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
