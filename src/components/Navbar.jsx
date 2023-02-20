/* eslint-disable @next/next/no-img-element */
import { Link, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

export default function Navbar() {
    const router = useRouter();
    const [isShown, setIsShown] = useState(true);
    useEffect(() => {
        window.screen.width < 768 ? setIsShown(true) : setIsShown(false);
    }, []);
    return (
        <>
            <nav
                className={`select-none fixed z-30 flex p-10 max-sm:p-2 justify-between max-sm:justify-between max-sm:h-16 items-center w-full h-20 bg-gradient-to-l from-zinc-900 shadow-2xl to-zinc-800 font-sans font-semibold text-lg max-sm:text-sm`}
            >
                <a className="text-cyan-50 text-2xl">
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
                {isShown ? (
                    <a>
                        <BiMenuAltRight
                            className="text-cyan-50 text-3xl cursor-pointer"
                            onClick={() => {
                                const context = document.getElementById("context");
                                if (context) {
                                    context.classList.toggle("hidden");
                                }
                            }}
                        />
                    </a>
                ) : (
                    <ul className="flex justify-center text-cyan-50">
                        <Link
                            activeClass="active"
                            to="hero"
                            smooth={true}
                            duration={300}
                            className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            activeClass="active"
                            to="domain"
                            smooth={true}
                            duration={300}
                            className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
                        >
                            Domains
                        </Link>
                        <Link
                            activeClass="active"
                            to="achivements"
                            smooth={true}
                            duration={300}
                            className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
                        >
                            Achievements
                        </Link>
                        <Link
                            activeClass="active"
                            to="events"
                            smooth={true}
                            duration={300}
                            className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
                        >
                            Events
                        </Link>
                        <Link
                            activeClass="active"
                            to="faculty"
                            smooth={true}
                            duration={300}
                            className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
                        >
                            Faculty
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            smooth={true}
                            duration={300}
                            className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300"
                        >
                            Contact
                        </Link>
                        <a
                            className="text-ambers cursor-pointer hover:text-sky-700 transition duration-300"
                            onClick={() => {
                                router.push("/login");
                            }}
                        >
                            Login
                        </a>
                    </ul>
                )}
            </nav>
            <div className="hidden" id="context">
                <div style={{transform: 'translate(-50%, -50%)'}} className="flex w-screen fixed text-bottle-text bg-black h-96 z-50 top-1/2 left-1/2 flex-col justify-evenly text-center items-center">
                    <Link
                        activeClass="active"
                        to="hero"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:text-sky-700 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        activeClass="active"
                        to="domain"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:text-sky-700 transition duration-300"
                    >
                        Domains
                    </Link>
                    <Link
                        activeClass="active"
                        to="achivements"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:text-sky-700 transition duration-300"
                    >
                        Achievements
                    </Link>
                    <Link
                        activeClass="active"
                        to="events"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:text-sky-700 transition duration-300"
                    >
                        Events
                    </Link>
                    <Link
                        activeClass="active"
                        to="faculty"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:text-sky-700 transition duration-300"
                    >
                        Faculty
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:text-sky-700 transition duration-300"
                    >
                        Contact
                    </Link>
                    <a
                        className="text-ambers cursor-pointer hover:text-sky-700 transition duration-300"
                        onClick={() => {
                            router.push("/login");
                        }}
                    >
                        Login
                    </a>
                </div>
            </div>
        </>
    );
}
