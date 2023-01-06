import Testing from "./Testing"

export default function Events() {
    return(
        <div id='events' className="flex flex-col justify-center items-center h-screen w-screen bg-bottle">
            <h1 data-aos="fade-up" className="max-sm:text-3xl text-6xl text-bottle-text">Upcoming Events</h1>
            <Testing />
        </div>
    )
}