import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    themeSlice,
    user: userSlice,
  },
});

export default store;
