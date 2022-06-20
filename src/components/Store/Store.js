import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./NewProfile-slice";
import postReducer from "./NewPost-slice";
import commentReducer from "./Comment-slice";
import signinReducer from "./Signin-slice";

const store = configureStore({
  reducer: {
    signin: signinReducer,
    profile: profileReducer,
    post: postReducer,
    comment: commentReducer,
  },
});

export default store;
