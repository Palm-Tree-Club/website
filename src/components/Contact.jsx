/* eslint-disable @next/next/no-img-element */
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import {SiInstagram} from 'react-icons/si';
export default function Contact() {
    return (
        <>
        <div id='contact' style={{ height: 60 + 'vh' }} className="font-sans w-screen p-20 bg-black grid grid-cols-4 gap-32 place-items-start">
            <div className="flex flex-col justify-start">
                <span className="text-white text-6xl">
                    <img className="inline-block" src="/Assets/Images/palm.png" height={100} width={100} alt="palm" />|
                    <img className="inline-block" src="/Assets/Images/sou.png" height={100} width={100} alt="sou" />
                </span>
                <p className="text-white mt-10 ">Palm Tree Club, created and mentored by Silver Oak College Of Computer Application!</p>
            </div>
            <div className="flex flex-col justify-start">
                <p className="text-white font-bold text-2xl uppercase">site track</p>
                <ul className="flex flex-col mt-10 text-cyan-50 text-xl">
                    <Link activeClass="active" to="hero" smooth={true} duration={300} className="mt-3 cursor-pointer hover:text-sky-700 transition duration-300">Home</Link>
                    <Link activeClass="active" to="domain" smooth={true} duration={300} className="mt-3 cursor-pointer hover:text-sky-700 transition duration-300">Domains</Link>
                    <Link activeClass="active" to="achivements" smooth={true} duration={300} className="mt-3 cursor-pointer hover:text-sky-700 transition duration-300">Achievements</Link>
                    <Link activeClass="active" to="events" smooth={true} duration={300} className="mt-3 cursor-pointer hover:text-sky-700 transition duration-300">Events</Link>
                </ul>
            </div>
            <div className="flex flex-col justify-start">
                <p className="text-white font-bold text-2xl uppercase">other links</p>
                <ul className="flex flex-col mt-10 text-cyan-50 text-xl">
                    <a href="https://silveroakuni.ac.in" target={'_blank'} className="mt-3 cursor-pointer hover:text-sky-700 transition duration-300" rel="noreferrer">Silver Oak University</a>
                    <a href="https://gdsc.community.dev/silver-oak-university-ahmedabad/" target={'_blank'} className="mt-3 cursor-pointer hover:text-sky-700 transition duration-300" rel="noreferrer">GDSC</a>
                </ul>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-white font-bold text-2xl uppercase">follow us</p>
                <ul className="flex mt-10 text-cyan-50 text-xl">
                    <a href="https://instagram.com/sou_palmclub" target={'_blank'} className="mt-3 cursor-pointer  transition duration-300" rel="noreferrer">
                        <SiInstagram className="text-4xl hover:text-sky-700 inline-block mr-2" />
                    </a>
                </ul>
            </div>
        </div>
        <div className="flex flex-col font-sans bg-black w-screen justify-center items-center">
            <p className="text-white mb-5 text-xl">Have a query? <a className="p-2 ml-4 bg-ambers rounded cursor-pointer" href="mailto:">Send Mail</a></p>
            <p className="text-white text-center">© 2021 Palm Tree Club. All rights reserved.</p>
        </div>
    </>
    )
}