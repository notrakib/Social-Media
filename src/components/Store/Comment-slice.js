import { createSlice } from "@reduxjs/toolkit";

const initialComment = [
  { name: "", userId: "", postId: "", comment: "", date: "" },
];

const commentSlice = createSlice({
  name: "comment",
  initialState: initialComment,
  reducers: {
    createPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const commentAction = commentSlice.actions;
export default commentSlice.reducer;
