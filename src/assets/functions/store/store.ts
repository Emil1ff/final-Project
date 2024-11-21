//store.ts
import { configureStore } from '@reduxjs/toolkit';
import { sliderReducer } from '../reducer/sliderReducer';
import { menuReducer } from '../reducer/menuReducer';

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
