import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';

export const LoginUser = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
        })
        .catch((err) => alert(`The email or password was entered incorrectly. Try again please. error: ${err}`));
}