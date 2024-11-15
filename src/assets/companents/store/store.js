import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from '../redux/reducer';

const store = configureStore({
  reducer: menuReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(), // No need to append thunk manually unless customized
});

export default store;
