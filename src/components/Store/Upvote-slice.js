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

export const FetchDataUpvotes = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch(
        "https://sm-upvote-default-rtdb.firebaseio.com/upvote.json"
      );
      const data = await response.json();
      dispatch(upvoteAction.replaceApiData(data || []));
    };

    fetchApiData();
  };
};

export const SendDataUpvotes = (newData) => {
  return () => {
    const sendApiData = async () => {
      await fetch("https://sm-upvote-default-rtdb.firebaseio.com/upvote.json", {
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
