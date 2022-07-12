import { createSlice } from "@reduxjs/toolkit";

const initialFriends = { friendArray: [] };

const friendsSlice = createSlice({
  name: "friends",
  initialState: initialFriends,
  reducers: {
    addFriends(state, action) {
      state.friendArray.push(action.payload);
    },
    updateFriends(state, action) {
      const targettedUser = state.friendArray.find(
        (user) => user.userId === action.payload.userId
      );
      targettedUser.friends.push(action.payload.friends);
    },
    replaceApiData(state, action) {
      state.friendArray = action.payload;
    },
  },
});

export const FetchDataFriends = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch(
        "https://sm-firends-default-rtdb.firebaseio.com/friends.json"
      );
      const data = await response.json();
      dispatch(friendsAction.replaceApiData(data || []));
    };

    fetchApiData();
  };
};

export const SendDataFriends = (newData) => {
  return () => {
    const sendApiData = async () => {
      await fetch(
        "https://sm-firends-default-rtdb.firebaseio.com/friends.json",
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

export const friendsAction = friendsSlice.actions;
export default friendsSlice.reducer;
