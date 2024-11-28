import { createAsyncThunk } from "@reduxjs/toolkit";

export const userApi = {
  getUser: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/emp/get-user-details`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      }
    );
    return response.json();
  },
  getLocation: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/claim/get-location`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      }
    );
    return response.json();
  },
  getCategory: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/claim/get-category`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      }
    );
    return response.json();
  },
  getSubCategory: async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/claim/get-sub-category/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      }
    );
    return response.json();
  },
  uploadBill: async (payload) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/claim/bill-upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
        body: payload,
      }
    );
    return response.json();
  },
  claim: async (payload) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/claim/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(payload),
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
export const getLocation = createAsyncThunk(
  "user/getLocation",
  async (_, { rejectWithValue }) => {
    try {
      return await userApi.getLocation();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategory = createAsyncThunk(
  "user/getCategory",
  async (_, { rejectWithValue }) => {
    try {
      return await userApi.getCategory();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSubCategory = createAsyncThunk(
  "user/getSubCategory",
  async (id, { rejectWithValue }) => {
    try {
      return await userApi.getSubCategory(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const uploadBill = createAsyncThunk(
  "user/uploadBill",
  async (payload, { rejectWithValue }) => {
    try {
      return await userApi.uploadBill(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createClaim = createAsyncThunk(
  "user/claim",
  async (payload, { rejectWithValue }) => {
    try {
      return await userApi.claim(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
