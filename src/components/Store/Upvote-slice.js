import { createSlice } from "@reduxjs/toolkit";

const initialUpvote = [{ postId: "", userId: "" }];
// postId,userId

const upvoteSlice = createSlice({
  name: "upvote",
  initialState: initialUpvote,
  reducers: {
    toggleUpvote(state, action) {
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

export const upvoteAction = upvoteSlice.actions;
export default upvoteSlice.reducer;
