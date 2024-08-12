"use client";
import Profilephoto from "@/components/Profilephoto";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  const handleDownload = async () => {
    const zip = new JSZip();
    const pdfUrl = "/assets/cvpdf/inga-banaityte-cv.pdf";

    const response = await fetch(pdfUrl);
    const blob = await response.blob();

    zip.file("inga-banaityte-cv.pdf", blob);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "inga-banaityte-cv.zip");
    });
  };

  return (
    <section className="relative h-[100vh] bg-black overflow-hidden z-20">
      <Boxes />
      <div className="container mx-auto h-full z-30 ">
        <div className="flex flex-col mt-6 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 bg-black">
          {/* Text */}
          <div className="text-center flex flex-col xl:text-left order-2 xl:order-none mt-8 xl:mt-0 z-40  bg-black p-5 rounded-lg">
            <span className="text-3xl md:text-5xl xl:text-8xl uppercase">
              Inga Banaityte
            </span>
            <span className="text-xl xl:text-3xl tracking-wide p-3">
              Junior Web Developer
            </span>
            {/* Btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 z-50">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0 z-50">
                <Social />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="z-40 bg-black rounded-full">
            <Profilephoto className="order-1 xl:order-none mb-8 xl:mb-0 overflow-hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
