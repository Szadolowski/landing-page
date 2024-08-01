import ButtonBlue from "./ButtonBlue";

function Contents() {
  return (
    <div className="w-fit flex flex-col justify-center items-center bg-[#181818] text-white mt-24">
      <h2 className="text-6xl">Contents</h2>
      <p className="text-center mb-14 text-lg pl-10 pr-10">
        {`We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.`}
      </p>
      <div className="flex flex-col p-6 md:flex-row md:justify-around">
        <div className="bg-white text-black flex flex-col items-center pt-12 pb-10 rounded-xl md:mr-2 md:mb-0 mb-2">
          <h3 className="text-center text-5xl p-3">Work</h3>
          <p className="text-base text-center w-2/5 mb-14">{`Ever wondered if you're too reliant on a client for work? Slate helps you identify.`}</p>
          <ButtonBlue text="Sing Up" />
          <div className="border-[#9FA2A5] border-2 rounded-md bg-black w-[236px] h-[163px] p-1 mt-10">
            <img src="./contentsLaptop.png" />
          </div>
          <div className="bg-[#D8D8D8] w-[296px] h-[7px] -mt-1 flex justify-center">
            <div className="bg-[#9FA2A5] w-10 h-1 rounded-b"></div>
          </div>
          <div className="bg-[#9FA2A5] w-[296px] h-1 flex justify-center rounded-b"></div>
        </div>
        <div className="bg-white text-black flex flex-col items-center pt-12 pb-10 rounded-xl md:ml-2 md:mt-0 mt-2">
          <h3 className="text-center text-5xl p-3">Design with real data</h3>
          <p className="text-base p-3 text-center w-2/5 mb-14">{`Ever wondered if you're too reliant on a client for work? Slate helps you identify .`}</p>
          <ButtonBlue text="Try For Free" />
          <img src="./contents.png" className="mt-8" />
        </div>
      </div>
    </div>
  );
}

export default Contents;
