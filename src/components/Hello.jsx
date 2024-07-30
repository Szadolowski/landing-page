import ButtonBlue from "./ButtonBlue";

function Hello() {
  return (
    <section className="flex justify-center items-center flex-col mt-52">
      <h1 className="text-wrap text-white text-6xl font-bold text-center font-sans">
        Work at the speed <br /> of thought
      </h1>
      <p className="text-gray-200 text-base mt-14 font-sans">
        Most calendars are designed for teams. Slate is designed for <br />
        freelancers who want a simple way to plan their schedule.
      </p>
      <nav className="flex justify-between flex-row w-[400px] mt-20">
        <ButtonBlue text="Try For Free" />
        <button className="rounded-none text-white font-sans font-light border-white border-solid border-[1px] py-5 px-10">
          Learn More
        </button>
      </nav>
      <img src="/hello-image.png" className="px-16 mt-9 md:mb-36 " />
      <div className=" w-full h-[300px] bottom-[300px] -mb-[300px] md:h-[1400px] md:bottom-[1400px] md:-mb-[1400px] relative z-10 bg-gradient-to-b from-[#00000000] to-black"></div>
    </section>
  );
}

export default Hello;
