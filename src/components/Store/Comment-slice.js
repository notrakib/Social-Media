import { createSlice } from "@reduxjs/toolkit";

const initialComment = [];

const commentSlice = createSlice({
  name: "comment",
  initialState: initialComment,
  reducers: {
    createComment(state, action) {
      state.push(action.payload);
    },
  },
});

export const commentAction = commentSlice.actions;
export default commentSlice.reducer;
