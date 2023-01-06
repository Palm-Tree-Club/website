import firebase from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth();
export async function AuthHandler(email, password) {
    const credentials = () => toast("Invalid Credentials");
    return signInWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user.user);
        if(user.user){
            console.log("Logged In");
        }
    }).catch((error) => {
        console.log(error);
        console.log(error);
        console.log(error);
        credentials;
        <ToastContainer />
    });
}