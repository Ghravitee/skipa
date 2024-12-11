// import { RiTwitterXFill, RiTelegram2Fill } from "react-icons/ri";

// const Footer = () => {
//   return (
//     <footer className="linear">
//       <div className="max-w-[1350px] mx-auto pt-52 pb-32 ">
//         <h1 className="lg:text-[9rem] text-blue-600 mb-10 font-bold leading-[1] text-center">
//           Ski Mask panda
//         </h1>
//         <h2 className="text-center font-bold text-[2rem] mb-20">
//           $SKIPA is based
//         </h2>
//         <div className="flex justify-center gap-3">
//           <a
//             href=""
//             className="py-3 px-2 flex items-center justify-center bg-black rounded-xl"
//           >
//             {" "}
//             <RiTwitterXFill color="white" className="text-4xl" />
//           </a>
//           <a
//             href=""
//             className="py-3 px-2 flex items-center justify-center bg-black rounded-xl"
//           >
//             {" "}
//             <RiTelegram2Fill color="white" className="text-4xl" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { RiTwitterXFill, RiTelegram2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="linear">
      <div className="max-w-[1350px] mx-auto pt-32 pb-10 px-4">
        <h1 className="font-edo text-[3rem] sm:text-[5rem] lg:text-[9rem] text-blue-600 mb-10 font-bold leading-[1] text-center">
          Ski Mask Panda
        </h1>
        <h2 className="text-center font-bold text-[1.5rem] sm:text-[2rem] mb-12">
          $SKIPA is based
        </h2>
        <div className="flex justify-center gap-2">
          <a
            href="https://x.com/skipabase"
            className="py-3 px-4 flex items-center justify-center bg-black rounded-xl"
          >
            <RiTwitterXFill color="white" className="text-3xl sm:text-4xl" />
          </a>
          <a
            href="https://t.me/skipabase"
            className="py-3 px-4 flex items-center justify-center bg-black rounded-xl"
          >
            <RiTelegram2Fill color="white" className="text-3xl sm:text-4xl" />
          </a>
        </div>

        <a
          href=""
          className="font-edo text-center text-white text-[1.5rem] mt-16 flex justify-center"
        >
          skipa.fun
        </a>
      </div>
    </footer>
  );
};

export default Footer;
