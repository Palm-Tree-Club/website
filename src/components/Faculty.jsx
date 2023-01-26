/* eslint-disable @next/next/no-img-element */
export default function Faculty() {
  return (
    <div
      id="faculty"
      className="select-none h-screen w-screen flex flex-col justify-center items-center bg-purple-800"
    >
      <h1 data-aos="fade-up" className="max-sm:text-3xl text-center text-5xl text-white">
        Meet our Founders, Organizers & Leaders
      </h1>
      <div className="max-sm:grid max-sm:place-items-center max-sm:gap-3 max-sm:grid-cols-2 w-screen m-14 flex justify-evenly items-center">
        <img
          loading="lazy"
          data-aos="fade-right"
          className="cursor-pointer max-sm:h-56 h-72"
          src="/Assets/Images/cards/dean.png"
          alt="Dean"
        />
        <img
          loading="lazy"
          data-aos="fade-up"
          className="cursor-pointer max-sm:h-56 h-72"
          src="/Assets/Images/cards/principal.png"
          alt="principal"
        />
        <img
          loading="lazy"
          data-aos="fade-down"
          className="cursor-pointer max-sm:h-56 h-72"
          src="/Assets/Images/cards/HOD.png"
          alt="HOD"
        />
        <img
          loading="lazy"
          data-aos="fade-left"
          className="cursor-pointer max-sm:h-56 h-72"
          src="/Assets/Images/cards/meghnamam.png"
          alt="meghna mam"
        />
      </div>
    </div>
  );
}
