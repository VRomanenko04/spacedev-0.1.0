'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../lib/redux/store';
import { initializeIsUserAuth } from '@/lib/redux/features/UserAuth.slice';
import '../lib/firebase/firebase';
import { initializeUserData } from '@/lib/redux/features/UserData.slice';


const InitializeApp = ({ children }: {children : React.ReactNode}) => {
    const userAuth = useSelector((state: RootState) => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const initializeApp = async () => {
            // Initialize user auth
            const userInitializationAction = initializeIsUserAuth();
            if (userInitializationAction) {
                dispatch(userInitializationAction);
            } else {
                if (userAuth.isAuthenticated) {
                    console.error("User initialization failed.");
                }
            }

            // Fetch user data if authenticated
            if (userAuth.isAuthenticated) {
                try {
                    const action = await initializeUserData(userAuth.uid);
                    if (action) {
                        dispatch(action);
                    }
                } catch (error) {
                    console.error("Error while initializing data:", error);
                }
            }
        };

        initializeApp();
    }, [userAuth]);

    return <>{ children }</>
}

export default InitializeApp;