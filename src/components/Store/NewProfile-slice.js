import { createSlice } from "@reduxjs/toolkit";

const initialProfileSlice = { profileArray: [] };

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileSlice,
  reducers: {
    createProfile(state, action) {
      state.profileArray.push(action.payload);
    },
    replaceApiData(state, action) {
      state.profileArray = action.payload;
    },
  },
});

export const FetchDataProfiles = () => {
  return (dispatch) => {
    const fetchApiData = async () => {
      const response = await fetch(
        "https://sm-profile-default-rtdb.firebaseio.com/profile.json"
      );
      const data = await response.json();
      dispatch(profileAction.replaceApiData(data || []));
    };

    fetchApiData();
  };
};

export const SendDataProfiles = (newData) => {
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
    };

    sendApiData();
  };
};

export const profileAction = profileSlice.actions;
export default profileSlice.reducer;
