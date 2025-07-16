// import panda from "../assets/panda.webp";
import skipanda from "../assets/skipanda.webp";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import dex from "../assets/dex-screener.png";

import apeStore from "../assets/apestore.PNG";

const Hero = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0x0000000000000000000000000000000");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="max-w-[1350px] mx-auto pt-20 mb-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="font-edo text-center lg:text-left text-[3rem] sm:text-[5rem] lg:text-[9rem] text-blue-600 mb-10 font-bold leading-[1]">
            Ski Mask Panda
          </h1>
          <h2 className="text-black mb-8 text-[1.5rem] sm:text-[2rem] font-extrabold text-center lg:text-left">
            SKIPA - MASK STAYS ON
          </h2>
          <h3 className="uppercase mb-8 text-[1.25rem] sm:text-[1.5rem] text-blue-600 font-bold text-center lg:text-left">
            Contract address
          </h3>

          <div
            onClick={handleCopy}
            className="flex justify-center gap-2 items-center bg-blue-600 border border-b-[7px] border-b-black rounded-2xl py-3 px-4 w-full sm:w-fit cursor-pointer"
          >
            {hasCopied ? (
              <h2 className="text-white font-bold text-xl sm:text-2xl">
                Copied!
              </h2>
            ) : (
              <h2 className="text-xl text-white font-bold break-all">
                0x000000000000000000000000000000
              </h2>
            )}

            <div>
              {hasCopied ? (
                <FaCopy className="text-2xl sm:text-3xl text-white" />
              ) : (
                <FaRegCopy className="text-2xl sm:text-3xl text-white" />
              )}
            </div>
          </div>

          <div className="flex flex-wrap mt-8 gap-2 justify-center lg:justify-start">
            {/* DEX Screener Button */}
            <a
              href="#"
              className="w-full sm:w-[280px] bg-blue-600 py-4 px-4 flex items-center justify-center border border-b-[7px] border-b-black rounded-2xl gap-2"
            >
              <img
                src={dex}
                alt="DEX Screener"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-white text-lg sm:text-2xl font-bold">
                DEX Screener
              </p>
            </a>

            {/* Buy Button */}
            <a
              href="#"
              className="w-full sm:w-[280px] flex items-center justify-center text-white text-lg sm:text-2xl font-bold bg-blue-600 border border-b-[7px] border-b-black rounded-2xl py-4 px-4 gap-2"
            >
              <img
                src={apeStore}
                alt="ApeStore"
                className="w-8 h-8 rounded-full"
              />
              Buy $SKIPA
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={skipanda}
            alt="Panda"
            className="w-full max-w-md lg:max-w-full animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
