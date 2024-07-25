import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import counterReducer from "./slice/counterSlice";
import loadingReducer from "./loading/loading";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
