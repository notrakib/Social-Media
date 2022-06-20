import { createSlice } from "@reduxjs/toolkit";

const initialSignState = {
  userId: "",
  signin: false,
  emailId: "",
  name: "",
  idToken: "",
  expiresIn: null,
};

const signinSlice = createSlice({
  name: "signin",
  initialState: initialSignState,
  reducers: {
    login(state, action) {
      state.userId = action.payload.userId;
      state.signin = true;
      state.emailId = action.payload.emailId;
      state.name = action.payload.name;
      state.idToken = action.payload.idToken;
      state.expiresIn = action.payload.expiresIn;
    },
    logout(state) {
      state.userId = "";
      state.signin = false;
      state.emailId = "";
      state.name = "";
      state.idToken = "";
      state.expiresIn = null;
    },
  },
});

export const signinAction = signinSlice.actions;
export default signinSlice.reducer;
