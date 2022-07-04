import { createSlice } from "@reduxjs/toolkit";

const initialComment = { commentArray: [] };

const commentSlice = createSlice({
  name: "comment",
  initialState: initialComment,
  reducers: {
    createComment(state, action) {
      state.commentArray.push(action.payload);
    },
    replaceApiData(state, action) {
      state.commentArray = action.payload;
    },
  },
});

export const FetchDataComments = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch(
        "https://sm-comment-default-rtdb.firebaseio.com/comment.json"
      );
      const data = await response.json();
      dispatch(commentAction.replaceApiData(data || []));
    };

    fetchApiData();
  };
};

export const SendDataComments = (newData) => {
  return () => {
    const sendApiData = async () => {
      await fetch(
        "https://sm-comment-default-rtdb.firebaseio.com/comment.json",
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

export const commentAction = commentSlice.actions;
export default commentSlice.reducer;
