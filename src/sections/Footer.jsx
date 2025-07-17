import skipandas from "../assets/skipandas.webp";
import { RiTwitterXFill, RiTelegram2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="linear">
      <div className="max-w-[1350px] mx-auto pt-32 px-4">
        <h1 className="font-edo text-[3rem] sm:text-[5rem] lg:text-[9rem] text-blue-600 mb-10 font-bold leading-[1] text-center">
          Ski Mask Panda
        </h1>
        <h2 className="text-center font-bold text-[1.5rem] sm:text-[2rem] mb-12">
          $SKIPA is based
        </h2>
        <div className="flex justify-center gap-2">
          <a
            href="https://x.com/skipa_base"
            className="py-3 px-4 flex items-center justify-center bg-black rounded-xl"
          >
            <RiTwitterXFill color="white" className="text-3xl sm:text-4xl" />
          </a>
          <a
            href="https://t.me/skipa_base"
            className="py-3 px-4 flex items-center justify-center bg-black rounded-xl"
          >
            <RiTelegram2Fill color="white" className="text-3xl sm:text-4xl" />
          </a>
        </div>

        <img src={skipandas} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
