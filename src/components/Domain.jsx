/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Domain() {
  const [domain, setDomain] = useState([]);
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((json) => {
        setDomain(json.jsonData.domains);
        console.log(json.jsonData.domains);
      });
  }, []);
  return (
    <div id="domain" className="flex flex-col justify-center items-center h-screen bg-slate-900 w-screen">
      <div className="flex justify-center items-center">
        <h1 className="m-20 font-semibold text-white text-6xl ">
          Find People Of Your Interest!
        </h1>
      </div>
      <div className=" grid grid-cols-2 place-content-center gap-5 w-3/6 ">
        {/* <div className="h-60 w-full border-2 rounded-lg border-sky-700"></div> */}
        {domain.map((item, index) => {
          return (
            <div
              key={index}
              className="h-40 w-full border-2 rounded-lg border-sky-700"
            >
              <div className="flex flex-col justify-around items-center h-full hover:bg-sky-700 transition ease-in-out duration-300">
                <img src={item.src} height={48} width={48} alt={item.name}/>
                <h1 className="text-2xl uppercase font-semibold text-white">
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
