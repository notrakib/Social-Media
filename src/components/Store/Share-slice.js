import { createSlice } from "@reduxjs/toolkit";

const initialShare = { shareArray: [] };
// postId,userId,name

const shareSlice = createSlice({
  name: "share",
  initialState: initialShare,
  reducers: {
    createShare(state, action) {
      const targetedPost = state.shareArray.find(
        (post) =>
          post.postId === action.payload.postId &&
          post.userId === action.payload.userId
      );

      if (targetedPost === undefined) state.push(action.payload);
      else {
        const indexOftargetedPost = state.indexOf(targetedPost);
        state.shareArray.splice(indexOftargetedPost);
      }
    },
    replaceApiData(state, action) {
      state.shareArray = action.payload;
    },
  },
});

export const FetchData = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch("url");
      const data = await response.json();
      dispatch(shareAction.replaceApiData(data || []));
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

export const shareAction = shareSlice.actions;
export default shareSlice.reducer;
