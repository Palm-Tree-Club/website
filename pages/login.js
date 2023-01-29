/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import firebase from "../src/services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { HiArrowNarrowLeft } from "react-icons/hi";

const loggedIn = () =>
  toast("Logged In!", {
    hideProgressBar: true,
    autoClose: 2000,
    type: "success",
    style: {
      zIndex: 9999,
      top: "100px",
    },
  });
const InvalidCredentials = (error) =>
  toast(`Invalid Credentials!\n${error}`, {
    hideProgressBar: true,
    autoClose: 2000,
    type: "error",
    style: {
      zIndex: 9999,
      top: "100px",
    },
  });
const auth = getAuth();

export default function LoginPage() {
  const router = useRouter();
  async function AuthHandler(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (auth.currentUser) {
          loggedIn();
          router.push({ pathname: "/dashboard" }, "/dashboard");
        }
      })
      .catch((error) => {
        InvalidCredentials(error.message);
      });
  }
  async function ResetPassword(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Password Reset Email Sent!", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
          style: {
            zIndex: 9999,
            top: "100px",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        InvalidCredentials(errorMessage);
      });
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="overflow-hidden h-screen w-screen bg-hero bg-cover max-sm:bg-center">
      <nav
        className={`fixed z-30 flex p-10 justify-center max-sm:justify-center items-center w-full h-20 bg-zinc-900 font-sans font-semibold text-lg max-sm:text-sm`}
      >
        <a
          onClick={() => {
            router.push("/");
          }}
          className="absolute left-2 text-white max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
        >
          <HiArrowNarrowLeft className="inline-block" /> Go Back
        </a>
        <a className="max-sm:hidden text-cyan-50 text-2xl">
          <img
            className="inline-block cursor-pointer"
            onClick={() => {
              router.reload();
            }}
            src="/Assets/Images/palm.png"
            height={50}
            width={50}
            alt="Palm Tree Club"
          />{" "}
          |{" "}
          <img
            onClick={() => {
              window.open("https://silveroakuni.ac.in", "_blank");
            }}
            src="/Assets/Images/sou.png"
            className="inline-block cursor-pointer"
            height={100}
            width={100}
            alt="silver oak university"
          />
        </a>
      </nav>
      <div className="backdrop-blur-sm bg-opacity flex flex-col h-screen w-screen justify-evenly items-center">
        <h1 className="text-white mt-16 text-4xl font-bold uppercase">
          Core Team Login
        </h1>
        <img
          src="/Assets/Images/palm.png"
          height={150}
          width={150}
          alt="Palm Tree Club"
        />
        <ToastContainer />
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
          <button
            onClick={() => {
              ResetPassword(emailRef.current.value);
            }}
            className="mt-5 bg-black text-white rounded-md p-2 active:bg-white active:text-black tarnsition ease-in-out duration-300"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
