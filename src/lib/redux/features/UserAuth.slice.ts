'use client'
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserAuthState {
    isAuthenticated: boolean | null
    uid: string | null
}

const initialState: UserAuthState = {
    isAuthenticated: false,
    uid: null
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        userAuth: (state, action: PayloadAction<UserAuthState>) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.uid = action.payload.uid;

            sessionStorage.setItem('userAuth', JSON.stringify(state));
        }
    }
});

export const initializeIsUserAuth = () => {
    const storedUserData = sessionStorage.getItem("userAuth");
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