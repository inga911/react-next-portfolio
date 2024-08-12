"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Profilephoto() {
  return (
    <div className="w-full h-full relative flex justify-center items-start">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        <div
          className="relative w-[298px] xl:w-[498px] h-[298px] xl:h-[498px] z-0"
          style={{
            backgroundImage: "url(/assets/photo.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            filter: "brightness(75%) grayscale(100%)",
            borderRadius: "50%",
          }}
        />
        <motion.svg
          className="absolute top-0 left-0 w-full h-full z-10"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="rgb(219 39 119)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Profilephoto;
