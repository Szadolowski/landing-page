function TopBar() {
  return (
    <header className="flex justify-between bg-[#181818] text-white py-8 px-10 box-border w-2/3 absolute top-0 max-w-6xl">
      <img src="" alt="img" />
      <div className="flex justify-between align-middle p-2.5 box-border space-x-7 w-1/2 font-semibold flex-wrap invisible lg:visible">
        <p>Home</p>
        <p>Product</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button className="px-11 py-3 border-white border-solid border-[1px]">
        Login
      </button>
    </header>
  );
}

export default TopBar;
