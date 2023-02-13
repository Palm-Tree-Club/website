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
            className="select-none flex flex-col justify-evenly items-center h-screen w-screen bg-bottle"
        >
            <h1
                data-aos="fade-up"
                className="max-sm:text-3xl text-6xl text-bottle-text"
            >
                Upcoming Events
            </h1>
            <div className="max-sm:grid-flow-row grid w-full px-28 max-sm:px-3 grid-flow-col place-items-center">
                {isShown ? <div
                    style={{ height: 100 + "px", width: 300 + "px" }}
                    className="rounded-2xl bg-event bg-cover flex justify-evenly items-center "
                ></div> : <div
                    style={{ height: 300 + "px", width: 700 + "px" }}
                    className="rounded-2xl bg-event bg-cover flex justify-evenly items-center p-10"
                ></div>}
                <div className="flex flex-col justify-evenly h-full items-center">
                    <h1 className="text-3xl font-semibold uppercase text-bottle-text text-center">
                        Make it live with Github
                    </h1>
                    <div className="text-xl text-bottle-text">
                        <p>
                            <img
                                className="inline-flex"
                                alt="calender"
                                height={30}
                                width={30}
                                src="https://img.icons8.com/color/48/null/calendar--v3.png"
                            />{" "}
                            : 16<sup>th</sup> Feb
                        </p>
                        <p>
                            <img
                                alt="clock"
                                height={30}
                                width={30}
                                className="inline-flex"
                                src="https://img.icons8.com/fluency/48/null/time-span.png"
                            />{" "}
                            : 11:00 am - 2:00 pm
                        </p>
                        <p className="mb-10">
                            <img
                                alt="location"
                                height={30}
                                width={30}
                                className="inline-flex"
                                src="https://img.icons8.com/office/40/null/place-marker--v1.png"
                            />{" "}
                            : Newton Hall - D Block
                        </p>
                        <a
                            className="bg-amber-400 p-3 rounded-xl text-xl font-semibold active:bg-transparent transition-all duration-300 active:text-bottle-text active:scale-90 cursor-pointer"
                            href="https://gdsc.community.dev/events/details/developer-student-clubs-silver-oak-university-ahmedabad-presents-make-it-live-with-github/"
                            rel="noreferrer"
                            target={"_blank"}
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
