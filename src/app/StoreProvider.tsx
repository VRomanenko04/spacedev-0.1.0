'use client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';
import { initializeIsUserAuth } from '@/lib/redux/features/UserAuth.slice';
import '../lib/firebase/firebase';

export default function StoreProvider({ children }: {children : React.ReactNode}) {

    useEffect(() => {
        const initializeUserAuth = async () => {
            const userInitializationAction = initializeIsUserAuth();
            if (userInitializationAction) {
                store.dispatch(userInitializationAction);
            } 
        }

        initializeUserAuth();
    }, [])

    return <Provider store={store}>{children}</Provider>
}