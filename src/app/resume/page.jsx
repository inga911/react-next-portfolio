"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import React from "react";
import "react-circular-progressbar/dist/styles.css";
import ExperienceTabsContent from "@/components/tabs-resume/ExperienceTabsContent";
import EducationTabsContent from "@/components/tabs-resume/EducationTabsContent";
import SkillsTabsContent from "@/components/tabs-resume/SkillsTabsContent";
import AboutTabsContent from "@/components/tabs-resume/AboutTabsContent";

function Page() {
  const [selectedTab, setSelectedTab] = React.useState("experience");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-5 xl:py-0 mb-40 bg-black"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
          onValueChange={(value) => setSelectedTab(value)}
        >
          <TabsList className="flex flex-col w-full max-w-[380px] h-[100%] mt-20 mx-auto xl:mx-0 gap-6 justify-center">
            <TabsTrigger
              value="experience"
              className="px-4 py-2 border border-pink-500 text-white rounded-xl mx-2 hover:bg-pink-300/25"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="px-4 py-2 border border-pink-500 text-white rounded-xl mx-2 hover:bg-pink-300/25"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="px-4 py-2 border border-pink-500 text-white rounded-xl mx-2 hover:bg-pink-300/25"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="px-4 py-2 border border-pink-500 text-white rounded-xl mx-2 hover:bg-pink-300/25"
            >
              About
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh]  flex justify-center">
            <AnimatePresence mode="wait">
              {selectedTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExperienceTabsContent />
                </motion.div>
              )}

              {selectedTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <EducationTabsContent />
                </motion.div>
              )}

              {selectedTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SkillsTabsContent />
                </motion.div>
              )}

              {selectedTab === "about" && (
                <motion.div
                  key="about"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AboutTabsContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Page;
