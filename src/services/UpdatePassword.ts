import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const updatePassword = (email: string) => {
    const auth = getAuth();
    
    try {
        sendPasswordResetEmail(auth, email).then(() => {
            alert('Password reset email has been sent');
        })
    } catch(error: any) {
        const errorMessage = error.message;
        console.log(errorMessage);
    }
}