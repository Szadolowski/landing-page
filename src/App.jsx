import Contents from "./components/Contents";
import Features from "./components/Features";
import Hello from "./components/Hello";
import TopBar from "./components/TopBar";

function App() {
  return (
    <main className="bg-[#181818] flex items-center flex-col">
      <div className="w-full flex items-center flex-col bg-gradient-to-b from-[#181818] to-black font-mono">
        <TopBar />
        <Hello />
      </div>
      <Features />
      <Contents />
      <div className="h-[400px] bg-gradient-to-b from-[#181818] to-black"></div>
    </main>
  );
}

export default App;
