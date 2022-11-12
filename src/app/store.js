import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import experienceReducer from '../features/experience/experienceSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    experience: experienceReducer,
  },
});
