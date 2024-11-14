


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const getAllData = createAsyncThunk("gitUsers", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const result = await response.json();
//   return result;
// });

// if we put error functionity
export const getAllData = createAsyncThunk("gitUsers", async (args, {rejectWithValue}) => {
 try{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return result;

 }catch(error){
  return rejectWithValue("ooops.... something fishy")


 }
});

export const gitUserSlice = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gitUserSlice.reducer;
