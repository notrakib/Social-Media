import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./NewProfile-slice";
import postReducer from "./NewPost-slice";
import commentReducer from "./Comment-slice";
import signinReducer from "./Signin-slice";
import upvoteReducer from "./Upvote-slice";
import shareReducer from "./Share-slice";

const store = configureStore({
  reducer: {
    signin: signinReducer,
    profile: profileReducer,
    post: postReducer,
    comment: commentReducer,
    upvote: upvoteReducer,
    share: shareReducer,
  },
});

export default store;
