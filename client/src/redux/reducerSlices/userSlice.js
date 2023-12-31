import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userDetails: {},
  isLoggedIn: false,
  token: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      return {
        ...state,
        userDetails: actions.payload.userDetails,
        token: actions.payload.token,
        isLoggedIn: actions.payload.success,
      };
    },
    // newUserDetails: (state, actions) => {
    //   return {
    //     ...state,
    //     token: actions.payload.token,
    //     isLoggedIn: true,
    //     userDetails: actions.payload.userDetails,
    //   };
    // },

    // updatedUserDetails: (state, actions) => {
    //     return {
    //         ...state,
    //         userDetails: actions.payload.userDetails,
    //     };
    // },

    handleLogout: () => {
      return initialState;
    },
  },
});

export const { setUserDetails, handleLogout } = UserSlice.actions;
export default UserSlice.reducer;
