import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./NewProfile-slice";
import postReducer from "./NewPost-slice";

const store = configureStore({
  reducer: { profile: profileReducer, post: postReducer },
});

export default store;
