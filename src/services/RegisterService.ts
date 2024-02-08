import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';

export const RegisterUser = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('User has registered');
}