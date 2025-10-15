import { useEffect } from "react";
import { Liquid } from "./uilayouts/liquid-gradient";
import { useState } from "react";
import { motion } from "motion/react";
import { CircleX } from "lucide-react";
export default function NewSiteMessage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout();
  }, []);
  if (!show) return null;

  return (
    <motion.div
      initial={{ x: "-100%", scale: 1.1 }}
      animate={{ x: 0, scale: 1 }}
      className="fixed bottom-6 right-6 z-[999] "
    >
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.pink.500),theme(colors.yellow.500),theme(colors.indigo.500))] animate-spin-slow opacity-80 blur-sm"></div>

      {/* Main Content */}
      <div className="relative bg-white/90 backdrop-blur-md text-gray-800 rounded-2xl px-4 py-3 shadow-lg border border-gray-200 flex items-center gap-3 pe-8">
        <div className="text-sm text-gray-800 flex gap-2 items-center">
          hey, i do have another version as well —{" "}
          <CoolButton>check it out!</CoolButton>
        </div>
        <button
          onClick={() => setShow(false)}
          title="Close"
          className="text hover:text-gray-600 absolute top-1 right-1 hover:scale-110"
        >
          <CircleX />
        </button>
      </div>
    </motion.div>
  );
}

const COLORS = {
  color1: "#FFFFFF",
  color2: "#1E10C5",
  color3: "#9089E2",
  color4: "#FCFCFE",
  color5: "#F9F9FD",
  color6: "#B2B8E7",
  color7: "#0E2DCB",
  color8: "#0017E9",
  color9: "#4743EF",
  color10: "#7D7BF4",
  color11: "#0B06FC",
  color12: "#C5C1EA",
  color13: "#1403DE",
  color14: "#B6BAF6",
  color15: "#C1BEEB",
  color16: "#290ECB",
  color17: "#3F4CC0",
};
// eslint-disable-next-line react/prop-types
const CoolButton = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center">
      <a
        href="https://new.arunkhatri.com.np"
        target="_blank"
        className="relative   inline-block w-40 h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg "
      >
        <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70 ">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px] "></div>
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
          <span className="absolute inset-0 rounded-lg bg-black"></span>
          <Liquid isHovered={isHovered} colors={COLORS} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${
                i <= 2 ? "blur-[3px]" : i === 3 ? "blur-[5px]" : "blur-[4px]"
              }`}
            ></span>
          ))}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]"></span>
        </div>
        <button
          className="absolute inset-0 rounded-lg bg-transparent cursor-pointer"
          aria-label="Get Started"
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="flex items-center justify-center px-2 gap-1 rounded-lg group-hover:text-yellow-400 text-white text-xl font-semibold tracking-wide whitespace-nowrap underline">
            {children}
          </span>
        </button>
      </a>
    </div>
  );
};

// export default GitHubButton;
