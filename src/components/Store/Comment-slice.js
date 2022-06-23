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

export const FetchData = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch("url");
      const data = await response.json();
      dispatch(commentAction.replaceApiData(data || []));
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

export const commentAction = commentSlice.actions;
export default commentSlice.reducer;
