import { createSlice } from "@reduxjs/toolkit";

const initialProfileSlice = [];

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileSlice,
  reducers: {
    createProfile(state, action) {
      state.push(action);
    },
  },
});

export const profileAction = profileSlice.actions;
export default profileSlice.reducer;
