'use client';

import React, { useEffect } from 'react';
import '../lib/firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../lib/redux/store';
import { initializeIsUserAuth } from '@/lib/redux/features/UserAuth.slice';
import { initializeUserData } from '@/lib/redux/features/UserData.slice';
import { useRouter } from 'next/navigation';

export const initializeApp = async (dispatch: any, userAuth: any) => {
    // Initialize user auth
    const userInitializationAction = initializeIsUserAuth();
    if (userInitializationAction) {
        dispatch(userInitializationAction);
    } else {
        if (userAuth && userAuth.isAuthenticated) {
            console.error("User initialization failed.");
        }
    }

    // Fetch user data if authenticated
    if (userAuth && userAuth.isAuthenticated) {
        try {
            const action = await initializeUserData(userAuth.uid);
            if (action) {
                dispatch(action);
                console.log('Initialization complete');
            }
        } catch (error) {
            console.error("Error while initializing data:", error);
        }
    }
};

const InitializeApp = ({ children }: {children : React.ReactNode}) => {
    const userAuth = useSelector((state: RootState) => state.authReducer);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        initializeApp(dispatch, userAuth);
    }, [userAuth, dispatch]);

    useEffect(() => {
        if (!userAuth.isAuthenticated) {
            router.push('/'); // Редирект, когда пользователь вышел из системы
        }
    }, [userAuth.isAuthenticated]);

    return <>{ children }</>
}

export default InitializeApp;