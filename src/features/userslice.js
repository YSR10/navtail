import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      const newUser = action.payload;
      return { ...state, user: newUser };
    },
    logout: (state) => {
      return { ...state, user: null };
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectuser = (state) => state.user.user;

export default userSlice.reducer;
