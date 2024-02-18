import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';
import { Dispatch } from '@reduxjs/toolkit';
import { actions as userAuthActions } from '../lib/redux/features/UserAuth.slice';

export const RegisterUser = async (dispatch:  Dispatch<any>, email: string, password: string, setIsConformed:React.Dispatch<React.SetStateAction<boolean>>) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        setIsConformed(true);
        // После успешной регистрации, диспетчеризуем действие userAuth с передачей true в качестве payload
        dispatch(userAuthActions.userAuth(true));
    }).catch((err: any) => {
        console.log(`Register error: ${err}`);
        setIsConformed(false);
    })
}