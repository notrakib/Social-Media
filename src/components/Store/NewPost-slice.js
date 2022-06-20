import { createSlice } from "@reduxjs/toolkit";

const initialPost = [{ userId: "", name: "", postId: "", post: "", date: "" }];

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
