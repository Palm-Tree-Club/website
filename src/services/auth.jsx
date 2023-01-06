import firebase from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();
export async function AuthHandler(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user.user);
    }).catch((error) => {
        console.log(error.code, error.message);
    });
}