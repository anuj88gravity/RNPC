import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore({
  reducer: {
    custom: customReducer,
  },
});

console.log('Store Configured');

export default store;
