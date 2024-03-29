import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { actions as userAuthActions } from '../lib/redux/features/UserAuth.slice';
import { Dispatch } from 'redux';

export const LoginUser = async (dispatch: Dispatch<any>, email: string, password: string, setIsConformed:React.Dispatch<React.SetStateAction<boolean>>) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            setIsConformed(true);
            // После успешного входа, диспетчеризуем действие userAuth с передачей true в качестве payload
            dispatch(userAuthActions.userAuth({ isAuthenticated: true, uid: user.uid }));
        })
        .catch((err: any) => {
            console.log(`Error: ${err}`)
            setIsConformed(false);
        });
}

export const LogoutUser = () => {
    const auth = getAuth();
    try {
        signOut(auth).then(() => {
            sessionStorage.clear();
        }).then(() => {
            window.location.reload();
        })
    } catch (error) {
        console.error('Ошибка выхода из системы:', error);
    }
}