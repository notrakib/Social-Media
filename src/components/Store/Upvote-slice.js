import { createSlice } from "@reduxjs/toolkit";

const initialUpvote = { upvoteArray: [{ postId: "", userId: "" }] };
// postId,userId

const upvoteSlice = createSlice({
  name: "upvote",
  initialState: initialUpvote,
  reducers: {
    toggleUpvote(state, action) {
      const targetedPost = state.upvoteArray.find(
        (post) =>
          post.postId === action.payload.postId &&
          post.userId === action.payload.userId
      );

      if (targetedPost === undefined) state.upvoteArray.push(action.payload);
      else {
        const indexOftargetedPost = state.upvoteArray.indexOf(targetedPost);
        state.upvoteArray.splice(indexOftargetedPost);
      }
    },
    replaceApiData(state, action) {
      state.upvoteArray = action.payload;
    },
  },
});

export const FetchData = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch("url");
      const data = await response.json();
      dispatch(upvoteAction.replaceApiData(data || []));
    };

    fetchApiData();
  };
};

export const SendData = (newData) => {
  return () => {
    const sendApiData = async () => {
      const response = await fetch("url", {
        method: "PUT",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    sendApiData();
  };
};

export const upvoteAction = upvoteSlice.actions;
export default upvoteSlice.reducer;
