import { createSlice } from "@reduxjs/toolkit";

const initialShare = [];
// postId,userId,name

const shareSlice = createSlice({
  name: "share",
  initialState: initialShare,
  reducers: {
    createShare(state, action) {
      const targetedPost = state.find(
        (post) =>
          post.postId === action.payload.postId &&
          post.userId === action.payload.userId
      );

      if (targetedPost === undefined) state.push(action.payload);
      else {
        const indexOftargetedPost = state.indexOf(targetedPost);
        state.splice(indexOftargetedPost);
      }
    },
  },
});

export const shareAction = shareSlice.actions;
export default shareSlice.reducer;
