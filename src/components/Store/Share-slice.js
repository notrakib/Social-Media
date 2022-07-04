import { createSlice } from "@reduxjs/toolkit";

const initialShare = { shareArray: [] };
// postId,userId,name

const shareSlice = createSlice({
  name: "share",
  initialState: initialShare,
  reducers: {
    createShare(state, action) {
      state.shareArray.push(action.payload);
    },
    replaceApiData(state, action) {
      state.shareArray = action.payload;
    },
  },
});

export const FetchDataShares = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch(
        "https://sm-share-349cf-default-rtdb.firebaseio.com/share.json"
      );
      const data = await response.json();
      dispatch(shareAction.replaceApiData(data || []));
    };

    fetchApiData();
  };
};

export const SendDataShares = (newData) => {
  return () => {
    const sendApiData = async () => {
      await fetch(
        "https://sm-share-349cf-default-rtdb.firebaseio.com/share.json",
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

export const shareAction = shareSlice.actions;
export default shareSlice.reducer;
