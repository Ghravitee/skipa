import Piechart from "../utils/Piechart";
// import skipandas from "../assets/skipandas.webp";
const Tokenomics = () => {
  return (
    <section className="py-20 linear">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-6">
        <h2 className="text-5xl sm:text-6xl text-center text-blue-600 my-6 font-bold font1 lg:hidden font-edo">
          SKIPANOMICS
        </h2>
        <div className="justify-self-center mx-auto">
          <Piechart />
        </div>
        <div className="flex flex-col gap-4 justify-center mx-auto">
          <mh2 className="text-7xl text-blue-600 my-6 font-bold hidden lg:block font-edo">
            SKIPANOMICS
          </mh2>
          <div className="border-2 border-white rounded-xl px-4 py-3 w-fit">
            <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold text-center lg:text-left font1 tracking-widest">
              Token Symbol: $SKIPA
            </p>
          </div>
          <div className="border-2 border-white rounded-xl px-4 py-3 w-fit">
            <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold text-center lg:text-left font1 tracking-widest">
              Total Supply: 1.000.000.000
            </p>
          </div>
          <div className="border-2 border-white rounded-xl px-4 py-3 w-fit">
            <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold text-center lg:text-left font1 tracking-widest">
              Ca: verified and renounced
            </p>
          </div>
          <div className="border-2 border-white rounded-xl px-4 py-3 w-fit">
            <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold text-center lg:text-left font1 tracking-widest">
              Lp: locked for 1 year
            </p>
          </div>
        </div>
      </div>

      {/* <img src={skipandas} alt="" /> */}
    </section>
  );
};

export default Tokenomics;
