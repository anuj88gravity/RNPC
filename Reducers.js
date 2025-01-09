import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

export const customReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("increment", (state) => {
      console.log('Reducer: increment action dispatched');
      state.c += 1;
    })
    .addCase("incrementByValue", (state, action) => {
      console.log('Reducer: incrementByValue action dispatched with payload:', action.payload);
      state.c += action.payload;
    })
    .addCase("decrement", (state) => {
      console.log('Reducer: decrement action dispatched');
      state.c -= 1;
    });
});
