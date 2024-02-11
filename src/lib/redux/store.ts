'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./features/UserAuth.slice";

const reducers = combineReducers({
    authReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;