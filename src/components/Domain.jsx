/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";


export default function Domain() {
  const [domain, setDomain] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((json) => {
        setDomain(json.domains);
      });
  }, []);
  return (
    <div id="domain" className="select-none flex flex-col justify-center items-center h-screen bg-slate-900 w-screen">
      <div data-aos="fade-up" className="flex justify-center items-center">
        <h1 className="m-20 max-sm:text-4xl max-sm:m-10 max-sm:text-center font-semibold text-ambers text-6xl ">
          Find People Of Your Interest!
        </h1>
      </div>
      <div data-aos="fade-up" className=" grid grid-cols-2 place-content-center gap-5 w-3/6 max-sm:w-screen ">
        {/* <div className="h-60 w-full border-2 rounded-lg border-sky-700"></div> */}
        {domain.map((item, index) => {
          return (
            <div
              key={index}
              className="h-40 w-full border-2 rounded-lg border-sky-700"
            >
              <div className="cursor-pointer flex flex-col justify-around items-center h-full hover:bg-sky-700 transition ease-in-out duration-300">
                <img loading="lazy" src={item.src} height={48} width={48} alt={item.name}/>
                <h1 className="text-2xl max-sm:text-xl uppercase font-semibold text-ambers">
                  {item.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
