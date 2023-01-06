import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth,  } from "firebase/auth";
import firebase from "../src/services/firebase";
const auth = getAuth();
export default function Dashboard() {
    const router = useRouter();
    useEffect(() => {
        console.log(auth.currentUser);
    }, []);
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <h1>Dashboard</h1>
        </div>
    );
}