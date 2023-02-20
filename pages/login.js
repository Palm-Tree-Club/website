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
import { TiArrowBackOutline } from "react-icons/ti";

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
        className={`fixed z-30 flex p-10 justify-center max-sm:justify-end items-center w-full h-20 bg-gradient-to-r from-zinc-900 shadow-2xl to-zinc-800 font-sans font-semibold text-lg max-sm:text-sm `}
      >
        <a
          onClick={() => {
            router.push("/");
          }}
          className="absolute flex  gap-1 left-2 text-white max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
        >
          <TiArrowBackOutline className="inline-block text-2xl text-ambers" /> Go Back
        </a>
        <a className=" text-cyan-50 flex justify-center items-center gap-3 text-2xl">
          <img
            className="inline-block max-sm:hidden cursor-pointer"
            onClick={() => {
              router.reload();
            }}
            src="/Assets/Images/palm.png"
            height={50}
            width={50}
            alt="Palm Tree Club"
          />{" "}
          <span className="text-2xl text-cyan-50 max-sm:hidden">|</span>{" "}
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



      <div className="backdrop-blur-sm bg-opacity flex flex-col h-screen w-screen justify-center gap-5 items-center">
        <h1 className="text-white mt-16 sm:text-4xl text-2xl font-bold uppercase">
          Core Team Login
        </h1>
        <img
          src="/Assets/Images/palm.png"
          height={150}
          width={150}
          alt="Palm Tree Club"
        />
        <ToastContainer />
        <div className="flex flex-col sm:w-1/2 w-4/5">
          <label className="text-white sm:text-xl text-xs mb-1  font-bold">Email</label>
          <input
            placeholder="abc@gmail.com"
            ref={emailRef}
            className=" outline-none  bg-white focus:border-b-4 mb-4 focus:border-b-sky-400 font-semibold shadow-2xl rounded-md p-2"
            type="email"
          />
          <label className="text-white  sm:text-xl text-xs mb-1  font-bold">Password</label>
          <input
            placeholder="********"
            ref={passwordRef}
            className=" placeholder:text-xl  outline-none  bg-white focus:border-b-4 focus:border-b-sky-400 font-semibold shadow-2xl rounded-md p-2"
            type="password"
          />
          <div className=" flex flex-col w-full">
            <button
              onClick={() => {
                AuthHandler(emailRef.current.value, passwordRef.current.value);
              }}
              className="mt-5 w-full bg-ambers hover:bg-pink-500 font-bold shadow-2xl text-white rounded-md p-2 active:bg-white active:text-black tarnsition ease-in-out duration-300"
            >
              Login
            </button>
            <div className="flex w-full sm:text-xl text-xs   text-white font-bold text-shadow justify-center items-center">
              Forgotten ?
              <button
                onClick={() => {
                  ResetPassword(emailRef.current.value);
                }}
                className=" flex   font-bold transition duration-500 text-shadow  text-sky-500 hover:text-blue-500 rounded-md p-2  active:text-black tarnsition ease-in-out "
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
