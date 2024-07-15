function App() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-gradient-to-b from-[#181818]  to-black pb-20 font-mono">
      <header className="flex justify-between bg-[#181818] text-white py-8 px-10 box-border w-[75rem] absolute top-0">
        <img src="" alt="img" />
        <div className="flex justify-between align-middle p-2.5 box-border space-x-7 w-1/2 font-semibold">
          <p>Home</p>
          <p>Product</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button className="px-11 py-3 border-white border-solid border-[1px]">
          Login
        </button>
      </header>
      <section className="flex justify-center items-center flex-col mt-52">
        <h1 className="text-wrap text-white text-6xl font-bold text-center font-sans">
          Work at the speed <br /> of thought
        </h1>
        <p className="text-gray-200 text-base mt-14 font-sans">
          Most calendars are designed for teams. Slate is designed for <br />
          freelancers who want a simple way to plan their schedule.
        </p>
        <nav className="flex justify-between flex-row w-[400px] mt-20">
          <button className="rounded-none text-white font-sans font-bold bg-indigo-500 py-5 px-10">
            Try For Free
          </button>
          <button className="rounded-none text-white font-sans font-light border-white border-solid border-[1px] py-5 px-10">
            Learn More
          </button>
        </nav>
      </section>
    </div>
  );
}

export default App;
