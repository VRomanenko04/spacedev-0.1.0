import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';
import { actions as userAuthActions } from '../lib/redux/features/UserAuth.slice';
import { Dispatch } from 'redux';

export const LoginUser = async (dispatch: Dispatch<any>, email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            // После успешного входа, диспетчеризуем действие userAuth с передачей true в качестве payload
            dispatch(userAuthActions.userAuth(true));
        })
        .catch((err) => alert(`The email or password was entered incorrectly. Try again please. error: ${err}`));
}