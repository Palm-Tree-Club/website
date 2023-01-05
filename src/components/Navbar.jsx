import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    return (
        <nav className={`fixed flex p-10 justify-between items-center w-full h-20 bg-zinc-900 font-sans font-semibold text-lg`}>
            <a className="text-cyan-50 text-2xl">Logo</a>
            <ul className="flex justify-center text-cyan-50">
                <Link activeClass="active" to="hero" smooth={true} duration={300} className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300">Home</Link>
                <Link activeClass="active" to="domain" smooth={true} duration={300} className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300">Domains</Link>
                <Link activeClass="active" to="achivements" smooth={true} duration={300} className="mr-10 cursor-pointer hover:text-sky-700 transition duration-300">Achievements</Link>
                <Link activeClass="active" to="" smooth={true} duration={300} className="cursor-pointer hover:text-sky-700 transition duration-300">Contact</Link>
            </ul>
        </nav>
    )
}