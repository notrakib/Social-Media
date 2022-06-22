import { createSlice } from "@reduxjs/toolkit";

const initialProfileSlice = [];

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileSlice,
  reducers: {
    createProfile(state, action) {
      state.push(action.payload);
    },
    replaceApiData(state, action) {
      state = action.payload.data;
    },
  },
});

export const FetchData = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch(
        "https://sm-profile-default-rtdb.firebaseio.com/profile.json"
      );
      const data = await response.json();
      dispatch(profileAction.replaceApiData(data));

      try {
        if (response.ok) {
          return;
        } else {
          const data = await response.json();
          throw new Error(data.error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchApiData();
  };
};

export const SendData = (newData) => {
  return () => {
    const sendApiData = async () => {
      const response = await fetch(
        "https://sm-profile-default-rtdb.firebaseio.com/profile.json",
        {
          method: "PUT",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      try {
        if (response.ok) return;
        else {
          const data = await response.json();
          throw new Error(data.error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    sendApiData();
  };
};

export const profileAction = profileSlice.actions;
export default profileSlice.reducer;
