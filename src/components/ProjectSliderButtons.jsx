"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function ProjectSliderButtons() {
  const swiper = useSwiper();

  return (
    <div className="flex justify-end gap-3 mt-4 absolute bottom-0 right-0 transform -translate-y-1/2 w-full px-4 z-10">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-2 border border-pink-700 text-pink-700 hover:text-pink-400 hover:border-pink-400 transition-all"
      >
        <PiCaretLeftBold />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-2 border border-pink-700  text-pink-700 hover:text-pink-400 hover:border-pink-400 transition-all"
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}

export default ProjectSliderButtons;
