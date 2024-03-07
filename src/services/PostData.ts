import { get, getDatabase, ref, set, update } from "firebase/database";

type DataProps = {
    [key: string]: any;
}

// POST запрос в узел users/userUID
export const postUserData = async (uid: string, postData: DataProps) => {
    try {
        const database = getDatabase();
        const userRef = ref(database, 'users/' + uid);

        // Проверяем, существует ли узел
        const snapshot = await get(userRef);
        if (!snapshot.exists()) {
            // Если узел не существует, создаем его с помощью set()
            await set(userRef, postData);
        } else {
            const updateData: DataProps = {};
            for (const key in postData) {
                if (postData.hasOwnProperty(key)) {
                    updateData[key] = postData[key];
                }
            }
            // Обновляем только те ключи, которые переданы в updateData
            await update(userRef, updateData);
        }
    } catch (error) {
        console.error('Ошибка при записи данных:', error);
        throw error;
    }
}