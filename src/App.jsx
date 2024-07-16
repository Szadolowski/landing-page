function App() {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col bg-gradient-to-b from-[#181818]  to-black font-mono">
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
          <div className="h-[800px]"></div>
        </section>
      </div>
      <div className="w-full flex justify-center items-center flex-col bg-[#181818] font-sans text-white pt-[162px]">
        <h2 className="text-6xl">FEATURES</h2>
        <p className="text-center pt-7 text-base">
          Most calendars are designed for teams. Slate is designed for <br />
          freelancers who want a simple way to plan their schedule.
        </p>
        <section className="flex flex-row justify-center mt-20">
          <div>
            <img src="/controlpanel-section1.png" alt="zdj" className="w-2/3" />
            <img
              className="relative left-64 bottom-24"
              src="/controlpanel-section1-2.png"
            />
          </div>
          <div className="flex flex-col justify-around items-center p-5">
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center space-x-5">
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.64636 13.6089L11.4197 9.83554L3.16636 1.59554C2.52636 0.955542 1.41969 1.12888 1.01969 1.95554C0.073024 3.94221 0.419691 6.38221 2.05969 8.03554L7.64636 13.6089ZM16.6864 11.1955C18.7264 12.1422 21.593 11.4755 23.713 9.35554C26.2597 6.80887 26.753 3.15554 24.793 1.19554C22.8464 -0.751124 19.193 -0.271124 16.633 2.27554C14.513 4.39554 13.8464 7.26221 14.793 9.30221L2.71302 21.3822C2.46372 21.6315 2.32366 21.9696 2.32366 22.3222C2.32366 22.6748 2.46372 23.0129 2.71302 23.2622C2.96233 23.5115 3.30046 23.6516 3.65302 23.6516C4.00559 23.6516 4.34372 23.5115 4.59302 23.2622L12.8464 15.0355L21.0864 23.2755C21.2098 23.399 21.3563 23.4969 21.5176 23.5637C21.6789 23.6305 21.8518 23.6649 22.0264 23.6649C22.2009 23.6649 22.3738 23.6305 22.5351 23.5637C22.6964 23.4969 22.8429 23.399 22.9664 23.2755C23.0898 23.1521 23.1877 23.0055 23.2545 22.8443C23.3213 22.683 23.3557 22.5101 23.3557 22.3355C23.3557 22.161 23.3213 21.9881 23.2545 21.8268C23.1877 21.6655 23.0898 21.519 22.9664 21.3955L14.7264 13.1555L16.6864 11.1955Z"
                    fill="#02E4C0"
                  />
                </svg>
                <h3 className="text-left font-medium text-2xl">
                  A single source <br />
                  of truth
                </h3>
              </div>
              <p className="text-left">
                When you add work to your <br />
                Slate calendar we automatically <br />
                calculate useful insights
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center space-x-5">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5495 13.395C14.0285 15.855 13.811 18.75 12.042 19.92C10.273 21.06 7.634 19.995 6.1405 17.535C4.6615 15.075 4.8935 12.15 6.6625 11.01C8.4315 9.87 11.0705 10.935 12.5495 13.395ZM15 23.625C17.9 23.625 18.625 22.5 18.625 22.5C18.625 22.5 17.9 25.5 15 25.5C12.1 25.5 11.375 22.545 11.375 22.5C11.375 22.5 12.1 23.625 15 23.625ZM23.3375 11.01C25.1065 12.15 25.3385 15.075 23.8595 17.535C22.366 19.995 19.727 21.06 17.958 19.92C16.189 18.75 15.9715 15.855 17.4505 13.395C18.9295 10.935 21.5685 9.87 23.3375 11.01ZM15 27C18.625 27 26.6 19.29 26.6 13.5C26.6 7.71 21.3945 3 15 3C8.6055 3 3.4 7.71 3.4 13.5C3.4 19.29 11.375 27 15 27ZM15 0C22.975 0 29.5 6.06 29.5 13.5C29.5 19.62 21.264 30 15 30C8.736 30 0.5 19.62 0.5 13.5C0.5 6.06 7.025 0 15 0Z"
                    fill="#02E4C0"
                  />
                </svg>
                <h3 className="text-left font-medium text-2xl">
                  Intuitive <br />
                  interface
                </h3>
              </div>
              <p className="text-left">
                When you add work to your <br />
                Slate calendar we automatically <br />
                calculate useful insights
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center space-x-5">
                <svg
                  width="42"
                  height="19"
                  viewBox="0 0 42 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.275 4.03437e-05C29.815 4.03437e-05 27.4917 0.988885 25.8346 2.70171L13.825 13.7203C12.7317 14.8504 11.2796 15.4684 9.725 15.4684C6.53042 15.4684 3.91667 12.8021 3.91667 9.50002C3.91667 6.19798 6.53042 3.53163 9.725 3.53163C11.2796 3.53163 12.7317 4.14966 13.8933 5.3504L15.8238 7.1162L18.4375 4.75003L16.2508 2.79C15.3953 1.90238 14.3782 1.19881 13.2581 0.719939C12.1379 0.241065 10.9371 -0.0036143 9.725 4.03437e-05C4.63417 4.03437e-05 0.5 4.27327 0.5 9.50002C0.5 14.7268 4.63417 19 9.725 19C12.185 19 14.5083 18.0112 16.1654 16.2983L28.175 5.27977C29.2683 4.14966 30.7204 3.53163 32.275 3.53163C35.4696 3.53163 38.0833 6.19798 38.0833 9.50002C38.0833 12.8021 35.4696 15.4684 32.275 15.4684C30.7375 15.4684 29.2683 14.8504 28.1067 13.6496L26.125 11.8662L23.5625 14.2324L25.7492 16.21C26.607 17.0932 27.625 17.7927 28.7448 18.2684C29.8646 18.7442 31.0643 18.9868 32.275 18.9823C37.3658 18.9823 41.5 14.7268 41.5 9.50002C41.5 4.20263 37.3658 4.03437e-05 32.275 4.03437e-05Z"
                    fill="#02E4C0"
                  />
                </svg>

                <h3 className="text-left font-medium text-2xl">
                  Or with rules
                </h3>
              </div>
              <p className="text-left">
                When you add work to your <br />
                Slate calendar we automatically <br />
                calculate useful insights
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
