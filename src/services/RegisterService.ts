import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';
import { Dispatch } from '@reduxjs/toolkit';
import { actions as userAuthActions } from '../lib/redux/features/UserAuth.slice';
import { get, getDatabase, ref } from 'firebase/database';
import { postUserData } from './PostData';

// Регистрация
export const RegisterUser = async (dispatch:  Dispatch<any>, email: string, username: string, password: string, setIsConformed:React.Dispatch<React.SetStateAction<boolean>>) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
        setIsConformed(true);
        // После успешной регистрации, диспетчеризуем действие userAuth с передачей true в качестве payload
        dispatch(userAuthActions.userAuth({ isAuthenticated: true, uid: user.uid }));
        RegisterUserToDB(user.uid, username, email)
    }).catch((err: any) => {
        console.log(`Register error: ${err}`);
        setIsConformed(false);
    })
}


// Добавление пользователя в базу данных
export const RegisterUserToDB = async (uid: string, username: string, email: string) => {
    const database = getDatabase();
    const allUsersRef = ref(database, 'users');
    let numChildren = 0;

    // Получение userID
    await get(allUsersRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                numChildren = data ? Object.keys(data).length : 0;
                console.log("Количество узлов в узле 'users': " + numChildren);
            } else {
                console.log("Узел 'users' не существует.");
            }
        }).catch((error) => {
            console.error("Ошибка при получении данных: " + error);
        });
    
        const userData = {
            username: username,
            email: email,
            userId: numChildren + 1
        };

        postUserData(uid, userData);
}