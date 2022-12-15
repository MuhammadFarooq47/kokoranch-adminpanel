import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedInUser = action.payload;
    },
    updateProfile: (state, action) => {
      let token = state.loggedInUser.token;
      let temp = { token, ...action.payload };

      state.loggedInUser = temp;
    },
  },
});
// Action creators are generated for each case reducer function
export const { login, updateProfile } = userSlice.actions;

export default userSlice.reducer;
