/* eslint-disable @next/next/no-img-element */
export default function Hero() {
    return (
        <div id="hero" className="grid h-screen bg-hero bg-cover w-screen max-sm:bg-center">
            <div  className="bg-opacity flex h-screen w-screen flex-col justify-center items-center font-sans col-span-2">
                <a className="hidden mb-10 max-sm:inline-block text-cyan-50 text-2xl"><img className="inline-block cursor-pointer" src="/Assets/Images/palm.png" height={100} width={100} alt="Palm Tree Club" /> | <img onClick={() => { window.open('https://silveroakuni.ac.in', '_blank') }} src="/Assets/Images/sou.png" className="inline-block cursor-pointer" height={150} width={150} alt="silver oak university" /></a>
                <h1 className="text-white text-6xl max-sm:text-3xl max-sm:text-center font-extrabold uppercase"><a href="https://silveroakuni.ac.in" target={'_blank'} className="hover:text-sky-700 transition duration-300 cursor-pointer" rel="noreferrer">SOCCA&apos;s </a>Largest Community</h1>
                <h1 className="mt-10 text-7xl max-sm:text-3xl uppercase font-bold text-ambers">Palm Tree Club</h1>
                <p className="text-white mt-10 text-3xl max-sm:text-3xl font-semibold text-grey">Learn | Build | Grow</p>
            </div>
        </div>
    )
}