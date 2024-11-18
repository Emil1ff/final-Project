import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from '../reducer/menuReducer';
import { sliderReducer } from '../reducer/sliderReducer';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    slider: sliderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
