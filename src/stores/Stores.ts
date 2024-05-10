import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '@stores/slices/QuizSlice';
import { setupListeners } from '@reduxjs/toolkit/query'

export const Store = configureStore({
    reducer: {
    quiz: quizReducer,
  },

});

setupListeners(Store.dispatch);

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
