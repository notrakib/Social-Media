import { createSlice } from "@reduxjs/toolkit";

const initialPost = [];

const postSlice = createSlice({
  name: "post",
  initialState: initialPost,
  reducers: {
    createPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const postAction = postSlice.actions;
export default postSlice.reducer;
