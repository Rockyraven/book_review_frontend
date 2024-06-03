
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchbookData = createAsyncThunk(
  "book/fetchbookData",
  async (thunkAPI) => { // Accept limit parameter
    try {
      const response = await axios.get(
        "https://book-reviews-dc20.onrender.com/api/getbook",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response?.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const bookSlice = createSlice({
  name: "book",
  initialState: {
    bookData: [],
    status: "idle",
    error: null,
    hasMoreData: true
  },
  reducers: {
    // Reducers if needed
    setbookData: (state, action) => {
      state.bookData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchbookData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchbookData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookData = action.payload;
        
      })
      .addCase(fetchbookData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setbookData } = bookSlice.actions;
export default bookSlice.reducer;
