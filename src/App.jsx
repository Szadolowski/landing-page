import Features from "./components/Features";
import Hello from "./components/Hello";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col bg-gradient-to-b from-[#181818]  to-black font-mono">
        <TopBar />
        <Hello />
      </div>
      <Features />
      {/*  */}
      <div className="h-[400px] bg-gradient-to-b from-[#181818] to-black"></div>
    </>
  );
}

export default App;
