import { getDatabase, ref, set } from "firebase/database";

type DataProps = {
    [key: string]: any;
}

// POST запрос в узел users/userUID
export const postUserData = async (uid: string, postData: DataProps) => {
    try {
        const database = getDatabase();
        const userRef = ref(database, 'users/' + uid);
    
        await set(userRef, postData);
    } catch (error) {
        console.error('Ошибка при записи данных:', error);
        throw error;
    }
}