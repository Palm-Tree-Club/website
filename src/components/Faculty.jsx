/* eslint-disable @next/next/no-img-element */
export default function Faculty() {
  return (
    <div id="faculty" className="select-none h-screen w-screen flex flex-col justify-center items-center bg-purple-800">
      <h1 data-aos='fade-up' className="md-sm:text-3xl text-5xl text-white">Meet our Founders, Organizers & Leaders</h1>
      <div className='w-screen m-14 flex justify-evenly items-center'>
        <img data-aos='fade-right' className="cursor-pointer" src='/Assets/Images/cards/principal.png' width={230} height={230} alt='principal'/>
        <img data-aos='fade-up' className="cursor-pointer" src='/Assets/Images/cards/HOD.png' width={230} height={230} alt='HOD'/>
        <img data-aos='fade-left' className="cursor-pointer" src='/Assets/Images/cards/meghnamam.png' width={230} height={230} alt='meghna mam'/>
      </div>
    </div>
  );
}