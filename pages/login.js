import { AuthHandler } from "../src/services/auth";
import { useRef } from "react";

export default function LoginPage() {
    const emailRef = useRef();
    const passwordRef = useRef();
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Core Team Login</h1>
      <div className="flex flex-col w-1/2">
        <label className="text-xl font-bold">Email</label>
        <input ref={emailRef} className="border-2 border-black rounded-md p-2" type="email" />
        <label ref={passwordRef} className="text-xl font-bold">Password</label>
        <input
          className="border-2 border-black rounded-md p-2"
          type="password"
        />
        <button onClick={() => {
            AuthHandler(emailRef.current.value, passwordRef.current.value)
        }} className="mt-5 bg-black text-white rounded-md p-2 active:bg-white active:text-black tarnsition ease-in-out duration-300">
          Login
        </button>
      </div>
    </div>
  );
}
