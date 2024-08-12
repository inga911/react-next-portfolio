"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { projects } from "../plugins/projects";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectSliderButtons from "@/components/ProjectSliderButtons";

function Projects() {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper) {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] bg-black  flex flex-col justify-center mt-2 xl:px-0"
    >
      <div className="container mx-auto -mt-7 p-[35px]">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="pl-3 text-8xl leading-none font-extrabold  text-white mono">
                {project.num}
              </div>
              <div className="uppercase tracking-widest text-xs mb-6 text-pink-800">
                {project.category} project
              </div>
              <div className="text-justify">{project.description}</div>
              <ul className="flex gap-3">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className=" text-pink-800 uppercase text-sm mt-3 mb-2"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-5">
                <Link
                  href={project.live}
                  className="text-4xl hover:text-pink-500"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsArrowUpRight />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="text-xs">Live project</div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link
                  href={project.github}
                  className="text-4xl hover:text-pink-500"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsGithub />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="text-xs">Github repository</div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] mt-14 rounded-xl">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 flex flex-col rounded-xl"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[310px] sm:h-[420px] md:h-[460px] relative group justify-center items-center  rounded-xl">
                      <div></div>
                      <div className="relative h-[250px] sm:w-[70%] sm:h-[350px] sm:mx-auto lg:w-full lg:h-full">
                        <Image
                          src={project.image}
                          layout="fill"
                          className="rounded-xl grayscale hover:grayscale-0 transition-all"
                          alt={`${project.num} project image`}
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <ProjectSliderButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
