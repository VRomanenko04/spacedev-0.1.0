'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./features/UserAuth.slice";
import { reducer as userDataReducer} from "./features/UserData.slice";

const reducers = combineReducers({
    authReducer,
    userDataReducer
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;