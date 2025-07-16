import InfiniteScroll from "../components/InfiniteScroll";

// import skipandas from "../assets/skipandas.webp";
const Tokenomics = () => {
  return (
    <section className="py-20 linear">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-6 px-4">
        <h2 className="text-5xl sm:text-6xl text-center text-blue-600 my-6 font-bold font1 lg:hidden font-edo">
          SKIPANOMICS
        </h2>

        <div className="flex flex-col gap-4 justify-center items-center mx-auto">
          <h2 className="text-7xl text-blue-600 my-2 font-bold hidden lg:block font-edo">
            SKIPANOMICS
          </h2>

          <div className="border-2 border-white rounded-xl px-4 py-3 w-fit">
            <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold text-center lg:text-left font1 tracking-widest">
              1% supply will be burnt
            </p>
          </div>
          <div className="border-2 border-white rounded-xl px-4 py-3 w-fit">
            <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold text-center lg:text-left font1 tracking-widest">
              2% will be used for marketing help with V3 fees
            </p>
          </div>
          <div className="border-2 border-white rounded-xl px-4 py-3 w-fit">
            <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold text-center lg:text-left font1 tracking-widest">
              3% will be held for airdrops
            </p>
          </div>
        </div>
      </div>

      <InfiniteScroll
        orientation=""
        background="bg-[#ffffff]"
        textColor="text-[#000000]"
        border="border-y-2 border-y-[#000000]"
        position="absolute z-40 top-20"
      />

      {/* <img src={skipandas} alt="" /> */}
    </section>
  );
};

export default Tokenomics;
