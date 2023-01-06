/* eslint-disable @next/next/no-img-element */
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className={`fixed z-30 flex p-10 justify-between max-sm:justify-center items-center w-full h-20 bg-zinc-900 font-sans font-semibold text-lg max-sm:text-sm`}>
            <a className="max-sm:hidden text-cyan-50 text-2xl"><img className="inline-block cursor-pointer" onClick={() => {
                router.reload();
            }} src="/Assets/Images/palm.png" height={50} width={50} alt="Palm Tree Club" /> | <img onClick={() => { window.open('https://silveroakuni.ac.in', '_blank') }} src="/Assets/Images/sou.png" className="inline-block cursor-pointer" height={100} width={100} alt="silver oak university" /></a>
            <ul className="flex justify-center text-cyan-50">
                <Link activeClass="active" to="hero" smooth={true} duration={300} className="max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300">Home</Link>
                <Link activeClass="active" to="domain" smooth={true} duration={300} className="max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300">Domains</Link>
                <Link activeClass="active" to="achivements" smooth={true} duration={300} className="max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300">Achievements</Link>
                <Link activeClass="active" to="events" smooth={true} duration={300} className="max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300">Events</Link>
                <Link activeClass="active" to="contact" smooth={true} duration={300} className="max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300">Contact</Link>
                <a className="text-ambers cursor-pointer hover:text-sky-700 transition duration-300" onClick={() => {
                    router.push('/login');
                }}>Login</a>
            </ul>
        </nav>
    )
}