'use client'
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserAuthState {
    isAuthenticated: boolean;
}

const initialState: UserAuthState = {
    isAuthenticated: false,
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        userAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;

            sessionStorage.setItem('isAuth', JSON.stringify(action.payload));
        }
    }
});

export const initializeIsUserAuth = () => {
    const storedUserData = sessionStorage.getItem("isAuth");
    if (storedUserData) {
        const decodedData = decodeURIComponent(storedUserData);
        const userData = JSON.parse(decodedData);
        console.log(userData);
        return userAuthSlice.actions.userAuth(userData);
    } else {
        return null;
    }
}

export const { actions, reducer } = userAuthSlice;