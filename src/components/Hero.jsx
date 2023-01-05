export default function Hero() {
    return(
        <div id="hero" className="grid h-screen bg-hero bg-cover w-screen">
            <div style={{backgroundColor: 'rgba(50, 49, 49, 0.361)'}} className="flex h-screen w-screen flex-col justify-center items-center font-sans col-span-2">
                <h1 className="text-6xl font-bold uppercase text-black"><a href="https://silveroakuni.ac.in" target={'_blank'} className="hover:text-sky-700 transition duration-300 cursor-pointer" rel="noreferrer">SOCCA&apos;s </a>Largest Community</h1>
                <h1 className="mt-10 text-7xl uppercase font-bold text-ambers">Palm Tree Club</h1>
                <p className="mt-10 text-3xl font-semibold text-grey">Learn | Build | Grow</p>
            </div>
        </div>
    )
}