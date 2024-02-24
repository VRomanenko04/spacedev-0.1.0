import { get, getDatabase, ref } from "firebase/database";

// Получение данных из DB об узле users/uid 
export const getUserData = async (uid: string) => {
    try {
        const database = getDatabase();
        const userRef = ref(database, 'users/' + uid);
        
        const snapshot = await get(userRef);
    
        if (snapshot.exists()) {
            const userData = snapshot.val();
            return userData;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Ошибка при чтении данных:', error);
        throw error;
    }
}