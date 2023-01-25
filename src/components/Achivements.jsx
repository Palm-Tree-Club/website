/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
export default function Achievements() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((json) => {
                setData(json.achivements);
                // console.log(json.jsonData.achivements);
            });
    }, []);

    return (
        <div id="achivements" className="select-noneselect-none flex flex-col font-sans justify-center items-center h-screen bg-ambers w-screen">
            <h1 data-aos="fade-up" className="text-white text-6xl max-sm:text-3xl">Achivements</h1>
            <div data-aos="fade-up" className="mt-32 grid gap-5 grid-flow-col place-items-center w-3/4 max-sm:grid-flow-row max-sm:mt-10">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="hover:bg-pink-300 transition ease-in-out duration-300 flex flex-col justify-evenly items-center h-48 w-96 bg-white rounded-lg shadow-2xl max-sm:w-64">
                            <img src={item.src} height={150} width={150} alt={item.name}/>
                            <a href={item.link} target={"_blank"} className="bg-ambers p-3 rounded-lg cursor-pointer" rel="noreferrer">Read more about {item.name}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}