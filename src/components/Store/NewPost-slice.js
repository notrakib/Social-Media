import { createSlice } from "@reduxjs/toolkit";

const initialPost = {
  newPostArray: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialPost,
  reducers: {
    createPost(state, action) {
      state.newPostArray.push(action.payload);
    },
    removePost(state, action) {
      const index = state.newPostArray.findIndex(
        (post) => post.postId === action.payload
      );
      state.newPostArray.splice(index, 1);
    },
    replaceApiData(state, action) {
      state.newPostArray = action.payload;
    },
  },
});

export const FetchDataPosts = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch(
        "https://sm-post-d50c7-default-rtdb.firebaseio.com/post.json"
      );
      const data = await response.json();
      dispatch(postAction.replaceApiData(data || []));
    };

    fetchApiData();
  };
};

export const SendDataPosts = (newData) => {
  return () => {
    const sendApiData = async () => {
      await fetch(
        "https://sm-post-d50c7-default-rtdb.firebaseio.com/post.json",
        {
          method: "PUT",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };

    sendApiData();
  };
};

export const postAction = postSlice.actions;
export default postSlice.reducer;
