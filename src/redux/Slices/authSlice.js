import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://book-reviews-dc20.onrender.com/user/signin",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      toast.success("Login successfully");
      console.log("Login response data:", response.data); // Log the entire response
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Thunk for signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://book-reviews-dc20.onrender.com/user/signup",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      toast.success("Register successfully");
      console.log("Signup response data:", response.data); // Log the entire response
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login actions
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Login fulfilled payload:", action.payload); // Log the payload
        state.user = action.payload?.createdUser; // Adjust according to actual payload structure
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle signup actions
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Signup fulfilled payload:", action.payload); // Log the payload
        state.user = action.payload.createdUser;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
 