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
  },
});
// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
