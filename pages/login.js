import { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../src/services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const loggedIn = () =>
  toast("Logged In!", {
    hideProgressBar: true,
    autoClose: 2000,
    type: "success",
  });
const InvalidCredentials = () =>
  toast("Invalid Credentials!", {
    hideProgressBar: true,
    autoClose: 2000,
    type: "error",
  });
const auth = getAuth();

export default function LoginPage() {
  const router = useRouter();
  async function AuthHandler(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (auth.currentUser) {
          loggedIn();
          router.push(
            { pathname: "/dashboard" },
            "/dashboard"
          );
        }
      })
      .catch((error) => {
        InvalidCredentials();
      });
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="h-screen w-screen bg-hero bg-cover max-sm:bg-center">
      <div className="bg-opacity flex flex-col h-screen w-screen justify-evenly items-center">
        <h1 className="text-white text-4xl font-bold uppercase">
          Core Team Login
        </h1>
        <ToastContainer className="z-40" />
        <div className="flex flex-col w-1/2">
          <label className="text-white text-xl font-bold">Email</label>
          <input
            ref={emailRef}
            className="border-2 border-black rounded-md p-2"
            type="email"
          />
          <label className="text-white text-xl font-bold">Password</label>
          <input
            ref={passwordRef}
            className="border-2 border-black rounded-md p-2"
            type="password"
          />
          <button
            onClick={() => {
              AuthHandler(emailRef.current.value, passwordRef.current.value);
            }}
            className="mt-5 bg-black text-white rounded-md p-2 active:bg-white active:text-black tarnsition ease-in-out duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
