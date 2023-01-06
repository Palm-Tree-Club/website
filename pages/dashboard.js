import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import firebase from "../src/services/firebase";
const auth = getAuth();
export default function Dashboard() {
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>Dashboard</h1>
    </div>
  );
}
