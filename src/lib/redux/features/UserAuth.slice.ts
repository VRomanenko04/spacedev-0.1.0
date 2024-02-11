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
        }
    }
});

export const { actions, reducer } = userAuthSlice;