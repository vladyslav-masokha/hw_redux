import {createSlice} from '@reduxjs/toolkit';

/**
* @param {string} userSlice
*/
const userSlice = createSlice({
  name: 'theme',
  initialState: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    secureCode: null,
    password: null,
  },
  reducers: {
    createUser(state, action) {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.secureCode = action.payload.secureCode;
      state.password = action.payload.password;
    },
    removeUser(state) {
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.secureCode = null;
      state.password = null;
    },
  },
});

export const {createUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
