import Image from 'next/image'

export default function Events() {
    return (
        <div id='events' className="select-none flex flex-col justify-evenly items-center h-screen w-screen bg-bottle">
            <h1 data-aos="fade-up" className="max-sm:text-3xl text-6xl text-bottle-text">Upcoming Events</h1>
            <div className="grid w-full px-28 grid-flow-col place-items-center">
                <div style={{ height: 300 + 'px', width: 700 + 'px' }} className="rounded-2xl bg-event bg-cover flex justify-evenly items-center p-10">
                </div>
                <div className="flex flex-col justify-evenly h-full items-center">
                    <h1 className="text-3xl font-semibold uppercase text-bottle-text text-center">Profile Building Session - LinkedIn</h1>
                    <p className='text-xl text-bottle-text'>
                        <p><Image className='inline-flex' alt="calender" loading='lazy' height={30} width={30} src="https://img.icons8.com/color/48/null/calendar--v3.png" /> : 28<sup>th</sup> Jan</p>
                        <p><Image alt='clock' height={30} width={30} className="inline-flex" loading='lazy' src="https://img.icons8.com/fluency/48/null/time-span.png" /> : 11:00 am - 1:30 pm</p> 
                        <p className='mb-10'><Image alt='location' height={30} width={30} className="inline-flex" src="https://img.icons8.com/office/40/null/place-marker--v1.png" /> : CV Raman Hall - B Block</p>
                        <a className='bg-amber-400 p-3 rounded-xl text-xl font-semibold active:bg-transparent transition-all duration-300 active:text-bottle-text active:scale-90 cursor-pointer' href='https://docs.google.com/forms/d/e/1FAIpQLSfl9aPobOWLW0q9onb5u6lZ_QrKcCS346Li5qmhv4adEOh93g/viewform' rel="noreferrer" target={'_blank'}>Register Now</a>
                    </p>
                </div>

            </div>
        </div>
    )
}