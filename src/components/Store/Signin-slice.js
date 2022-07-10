import { createSlice } from "@reduxjs/toolkit";

let initialSignState;
if (localStorage.getItem("Signin")) {
  const localProfile = JSON.parse(localStorage.getItem("Signin"));

  initialSignState = {
    userId: localProfile.userId,
    signin: localProfile.signin,
    emailId: localProfile.emailId,
    name: localProfile.name,
    idToken: localProfile.idToken,
    expiresIn: localProfile.expiresIn,
    loginTime: localProfile.loginTime,
  };
} else {
  initialSignState = {
    userId: "",
    signin: false,
    emailId: "",
    name: "",
    idToken: "",
    expiresIn: null,
    loginTime: 0,
  };
}

const signinSlice = createSlice({
  name: "signin",
  initialState: initialSignState,
  reducers: {
    login(state, action) {
      localStorage.setItem("Signin", JSON.stringify(action.payload));
      state.userId = action.payload.userId;
      state.signin = true;
      state.emailId = action.payload.emailId;
      state.name = action.payload.name;
      state.idToken = action.payload.idToken;
      state.expiresIn = action.payload.expiresIn;
    },
    logout(state) {
      localStorage.removeItem("Signin");
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
