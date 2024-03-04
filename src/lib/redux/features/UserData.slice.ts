'use client'
import { getUserData } from "@/services/GetData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type IUserData = {
    email?: string | null
    username?: string | null
    userId?: number | null
}

const initialState: IUserData = {
    email: null,
    username: null,
    userId: null,
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUserData>) => {
            const currentState = state;

            const updatedUserData = {
                email: action.payload.email ?? currentState.email,
                username: action.payload.username ?? currentState.username,
                userId: action.payload.userId ?? currentState.userId
            };

            const newState = {
                ...currentState,
                ...updatedUserData
            };

            const userDataString = JSON.stringify(newState);
            sessionStorage.setItem('userData', userDataString);

            return newState;
        }
    }
});

export const initializeUserData = async (uid: string | null) => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        return Promise.resolve(userDataSlice.actions.setUserData(userData));
    } else {
        if (uid) {
            const fetchedUserData = await getUserData(uid);

            if (fetchedUserData) {
                const { email, username, userId } = fetchedUserData;
                const userData = { email, username, userId };

                return userDataSlice.actions.setUserData(userData);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}


export const { actions, reducer } = userDataSlice;