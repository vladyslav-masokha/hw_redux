import {createSlice} from '@reduxjs/toolkit';
import {
  getThemeFromLocalStorage,
  setThemeInLocalStorage,
} from '../reducers/themeReducer';

/**
* Helper function to set the theme in localStorage
* @param {string} theme - The theme value to be stored in localStorage.
*/
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: getThemeFromLocalStorage(),
  },
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      setThemeInLocalStorage(state.theme);
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
