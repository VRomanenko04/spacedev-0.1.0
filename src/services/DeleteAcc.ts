import { deleteUser, getAuth } from "firebase/auth";
import { getDatabase, ref, remove } from "firebase/database";
import { LogoutUser } from "./LoginService";


export const deleteUserAccount = () => {
    const auth = getAuth();
    const db = getDatabase();
    const user = auth.currentUser;

    if (user) {
        const userRef = ref(db, 'users/' + user.uid);

        remove(userRef)
            .then(() => {
                deleteUser(user);
            })
            .then(() => {
                LogoutUser();
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    }
}