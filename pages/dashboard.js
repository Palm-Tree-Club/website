/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import firebase from "../src/services/firebase";
import { useRouter } from "next/router";
import { BiLogOutCircle } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import {
  fetchAndActivate,
  getAll,
  getRemoteConfig,
} from "firebase/remote-config";

const auth = getAuth();

export default function Dashboard() {
  const [task, setTask] = useState(null);
  const [announce, setannounce] = useState(null);
  const [events, setevents] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (!auth.currentUser) {
      router.push({ pathname: "/login" }, "/login");
    }
  }, [router]);
  useEffect(() => {
    const remoteConfig = getRemoteConfig(firebase);
    remoteConfig.settings.minimumFetchIntervalMillis = 10000;
    fetchAndActivate(remoteConfig).then(() => {
      const testing = getAll(remoteConfig, "dashboard");
      const josn = JSON.parse(testing.dashboard._value);
      setTask(josn.task);
      setannounce(josn.announcement);
      setevents(josn.events);
    });
  }, []);

  return (
    <div className="h-screen w-screen ">
      <nav
        className={`fixed z-30 flex p-10 justify-center max-sm:justify-center items-center w-full h-20 bg-zinc-900 font-sans font-semibold text-lg max-sm:text-sm`}
      >
        <a
          onClick={() => {
            auth.signOut();
            router.back();
          }}
          className="absolute left-2 text-white max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
        >
          <BiLogOutCircle className="inline-block" /> Sign Out
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
        <a className="absolute right-2 text-white max-sm:mr-3 cursor-pointer hover:text-sky-700 transition duration-300">
          {auth.currentUser?.email}{" "}
        </a>
      </nav>
      {task != null && announce != null && events != null ? (
      <div className="h-screen w-screen flex flex-col justify-start items-center bg-grayish">
        <div className="mt-40 grid grid-cols-3 gap-10">
          <div className="rounded-lg w-auto border-2 p-5">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold">
                Task
              </h1>
              <ol className="mt-10">
                {task != null
                  ? task.map((item, key) => (
                      <li className="text-white" key={key}>
                        {" "}
                        <AiFillCaretRight className="inline-block" />{" "}
                        {item.message}
                      </li>
                    ))
                  : null}
              </ol>
            </div>
          </div>
          <div
            style={{ width: 30 + "rem" }}
            className="rounded-lg w-auto border-2 p-5"
          >
            <div className="flex flex-col items-start">
              <h1 className="text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold">
                Announcements
              </h1>
              <ol className="mt-10">
                {announce != null
                  ? announce.map((item, key) => (
                      <li className="text-white" key={key}>
                        {" "}
                        <AiFillCaretRight className="inline-block" />{" "}
                        {item.message}
                      </li>
                    ))
                  : null}
              </ol>
            </div>
          </div>
          <div className="w-auto rounded-lg border-2 p-5">
            <div className=" flex flex-col items-start ">
              <h1 className="text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold">
                Upcoming Events
              </h1>
              <ol className="mt-10">
                {events != null
                  ? events.map((item, key) => (
                      <li className="text-white" key={key}>
                        {" "}
                        <AiFillCaretRight className="inline-block" />{" "}
                        {item.message}
                      </li>
                    ))
                  : null}
              </ol>
            </div>
          </div>
        </div>
      </div>
        ): <div className="h-screen w-screen flex flex-col justify-evenly items-center">
            <img src='/Assets/Images/palm.png' height={200} width={200} alt='Loading'/>
            <h1 className='text-4xl text-black'>Loading...</h1>
          </div>}
    </div>
  );
}
