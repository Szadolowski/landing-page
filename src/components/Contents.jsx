import ButtonBlue from "./ButtonBlue";

function Contents() {
  return (
    <div className="w-fit flex flex-col justify-center items-center bg-[#181818] text-white mt-24">
      <h2 className="text-6xl">Contents</h2>
      <p className="text-center mb-14 text-lg">
        {`We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.`}
      </p>
      <div className="w-full flex flex-col p-6">
        <div className="bg-white text-black flex flex-col items-center pt-12 pb-10 rounded-xl mb-8">
          <h3 className="text-center text-5xl p-3">Work</h3>
          <p className="text-base p-3 text-center w-2/5 mb-14">{`Ever wondered if you're too reliant on a client for work? Slate helps you identify.`}</p>
          <ButtonBlue text="Sing Up" />
        </div>
        <div className="bg-white text-black flex flex-col items-center pt-12 pb-10 rounded-xl">
          <h3 className="text-center text-5xl p-3">Design with real data</h3>
          <p className="text-base p-3 text-center w-2/5 mb-14">{`Ever wondered if you're too reliant on a client for work? Slate helps you identify .`}</p>
          <ButtonBlue text="Try For Free" />
        </div>
      </div>
    </div>
  );
}

export default Contents;
