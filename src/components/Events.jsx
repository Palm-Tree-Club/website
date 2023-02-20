/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function Events() {
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    window.screen.width < 768 ? setIsShown(true) : setIsShown(false);
  }, []);
  return (
    <div
      id="events"
      className="select-none flex flex-col justify-evenly items-center h-screen w-screen bg-gradient-to-b from-bottle to-green-900  "
    >
      <h1
        data-aos="fade-up"
        className="max-sm:text-3xl text-6xl text-bottle-text"
      >
        Events
      </h1>
      <div className="max-sm:grid-flow-row grid w-full px-28 max-sm:px-3 grid-flow-col place-items-center">
        {isShown ? (
          <div
            style={{ height: 150 + "px", width: 250 + "px" }}
            className="rounded-2xl  bg-event bg-contain flex justify-evenly items-center "
          ></div>
        ) : (
          <div
            style={{ height: 300 + "px", width: 550 + "px" }}
            className="rounded-2xl bg-event bg-cover flex justify-evenly items-center p-10"
          ></div>
        )}
        <div className="flex mt-16 flex-col justify-evenly h-full items-center">
          <div className=" flex  flex-col justify-evenly h-full items-center text-xl text-bottle-text">
            <h1 className="text-3xl flex flex-wrap pl-7  font-semibold uppercase text-bottle-text text-center">
            Graphic Designing Champaign
            </h1>
            <p>
              <img
                className="inline-flex"
                alt="calender"
                height={30}
                width={30}
                src="https://img.icons8.com/color/48/null/calendar--v3.png"
              />{" "}
              : 17<sup>th</sup> Feb to 28th Feb
            </p>
            <p className="mb-10">
              <img
                alt="clock"
                height={30}
                width={30}
                className="inline-flex"
                src="https://img.icons8.com/fluency/48/null/time-span.png"
              />{" "}
              : 11:00 am - 2:00 pm
            </p>
            {/* <p className="mb-10">
                            <img
                                alt="location"
                                height={30}
                                width={30}
                                className="inline-flex"
                                src="https://img.icons8.com/office/40/null/place-marker--v1.png"
                            />{" "}
                            : Newton Hall - D Block
                        </p> */}
            <a
              className="bg-amber-500 text-white hover:bg-yellow-600 p-3 rounded-xl text-xl font-semibold active:bg-transparent transition-all duration-300 active:text-bottle-text active:scale-90 cursor-pointer"
              href="https://drive.google.com/drive/folders/1LJJIfejhIaHGcXIkFV25gyJZ1zDHAh8f?usp=sharing"
              rel="noreferrer"
              target={"_blank"}
            >
              Champaign Videos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
