import { getDatabase, ref, set } from "firebase/database";

type DataProps = {
    [key: string]: any;
}

// POST запрос в узел users/userUID
export const postUserData = async (uid: string, postData: DataProps) => {
    const database = getDatabase();
    const userRef = ref(database, 'users/' + uid);

    await set(userRef, postData);
}