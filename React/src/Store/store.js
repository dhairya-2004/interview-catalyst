import { Tuple, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import logger from 'redux-logger'

const store = configureStore({
  reducer: rootReducer,
  middleware:()=>new Tuple(logger),
  decTools: process.env.NODE_ENV !== "production",
});

export default store;
