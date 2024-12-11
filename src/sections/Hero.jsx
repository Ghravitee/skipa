// // import proof from "../assets/proof.webp";
// import panda from "../assets/panda.PNG";
// import { useState } from "react";
// import { FaRegCopy } from "react-icons/fa6";
// import { FaCopy } from "react-icons/fa6";
// import dex from "../assets/dex-screener.png";

// const Hero = () => {
//   const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("0xc66B839Ef20f2D35B3B7b0f6d908Ab63a9829674");
//     setHasCopied(true);

//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };
//   return (
//     <div className="max-w-[1350px] mx-auto pt-20 mb-20">
//       <div className="grid grid-cols-2 gap-2">
//         <div>
//           <h1 className="lg:text-[9rem] text-blue-600 mb-10 font-bold leading-[1]">
//             Ski Mask panda
//           </h1>
//           <h2 className="text-black mb-8 text-[2rem] font-extrabold ">
//             SKIPA - MASK STAYS ON
//           </h2>
//           <h3 className="uppercase mb-8 text-[1.5rem] text-blue-600 font-bold ">
//             Contract address
//           </h3>
//           <div
//             onClick={handleCopy}
//             className="flex justify-center gap-4 items-center bg-blue-600 border border-b-[7px] border-b-black rounded-2xl py-3 px-4 w-fit"
//           >
//             {hasCopied ? (
//               <h2 className="text-white font-bold text-2xl">Copied!</h2>
//             ) : (
//               <h2 className="text-2xl text-white font-bold">
//                 0xc66B839Ef20f2D35B3B7b0f6d908Ab63a9829674
//               </h2>
//             )}

//             <div>
//               {hasCopied ? (
//                 <FaCopy className="text-3xl " />
//               ) : (
//                 <FaRegCopy className="text-3xl" />
//               )}
//             </div>
//           </div>

//           <div className="flex mt-8 gap-1">
//             <div className="bg-blue-600 py-3 px-3 flex border border-b-[7px] border-b-black rounded-2xl gap-2">
//               <img
//                 src={dex}
//                 alt=""
//                 width={40}
//                 height={40}
//                 className="rounded-full"
//               />
//               <p className="text-white text-[2rem] font-bold">DEX Screener</p>
//             </div>
//             <a
//               href=""
//               className="flex justify-center text-white font-bold items-center text-[2rem] bg-blue-600 border border-b-[7px] border-b-black rounded-2xl p-3"
//             >
//               Buy $SKIPA
//             </a>
//           </div>
//         </div>

//         <div>
//           <img src={panda} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import proof from "../assets/proof.webp";
import panda from "../assets/panda.PNG";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import dex from "../assets/dex-screener.png";

const Hero = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0x0000000000000000000000000000");
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
            className="flex justify-center gap-2 items-center bg-blue-600 border border-b-[7px] border-b-black rounded-2xl py-3 px-4 w-full sm:w-fit"
          >
            {hasCopied ? (
              <h2 className="text-white font-bold text-xl sm:text-2xl">
                Copied!
              </h2>
            ) : (
              <h2 className="text-xl sm:text-2xl text-white font-bold break-all">
                0x0000000000000000000000000000
              </h2>
            )}

            <div>
              {hasCopied ? (
                <FaCopy className="text-2xl sm:text-3xl" />
              ) : (
                <FaRegCopy className="text-2xl sm:text-3xl" />
              )}
            </div>
          </div>

          <div className="flex flex-wrap mt-8 gap-1 justify-center lg:justify-start">
            <div className="bg-blue-600 py-3 px-4 flex border border-b-[7px] border-b-black rounded-2xl gap-2 items-center">
              <img
                src={dex}
                alt="DEX Screener"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-white text-lg sm:text-[2rem] font-bold">
                DEX Screener
              </p>
            </div>
            <a
              href=""
              className="flex justify-center items-center text-white font-bold text-lg sm:text-[2rem] bg-blue-600 border border-b-[7px] border-b-black rounded-2xl py-3 px-4"
            >
              Buy $SKIPA
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={panda}
            alt="Panda"
            className="w-full max-w-md lg:max-w-full animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
