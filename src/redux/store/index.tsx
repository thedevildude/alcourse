import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import themeReducer from "../features/theme";

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
