import { TabsContent } from "../ui/tabs";
import { about } from "@/app/plugins/about";
import "react-circular-progressbar/dist/styles.css";

function AboutTabsContent() {
  return (
    <div className="pb-20">
      <TabsContent value="about" className="w-full">
        <div className="xl:mt-20">
          <div className="mb-10">
            <p className="mb-3 text-gray-300 first-letter:text-8xl first-letter:font-bold first-letter:text-sky-500 first-letter:me-3 first-letter:float-start text-justify">
              {about.descriptionPartOne}
            </p>
            <p className="text-gray-300 text-justify">
              {about.descriptionPartTwo}
            </p>
          </div>

          <div className="uppercase mb-2 text-sky-400 text-lg font-semibold">
            Some facts about me:
          </div>
          <div className="pb-5">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
              {about.facts.map((x, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-full h-[150px] bg-slate-700/25 rounded-xl flex justify-center items-center transition-all duration-300 relative overflow-hidden">
                    <div className="p-2 w-full h-full text-sm relative bg-slate-900/25 flex pt-24 justify-center text-center">
                      <div className="">{x.item}</div>
                      <div
                        className="absolute text-7xl  text-sky-500/25 top-12 left-1/2"
                        style={{
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {x.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
            <div className="uppercase mt-5 mb-2 text-sky-400 text-lg font-semibold">
              Languages:
            </div>
            <div className="flex ">
              <div className="flex justify-between">
                <div className="flex justify-between lg:flex-row flex-col gap-5">
                  <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {about.items.map((x, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-full h-[150px] bg-slate-700/25 rounded-xl flex justify-center items-center transition-all duration-300 relative overflow-hidden">
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              backgroundImage: `url(${
                                x.backgroundImage || ""
                              })`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              filter: "brightness(0.5)",
                            }}
                          ></div>
                          <div
                            className="p-2 w-[200px] z-10 relative bg-slate-700/25 flex flex-col justify-center items-center pointer-events-none"
                            style={{
                              backdropFilter: "blur(1px) brightness(0.4)",
                              height: "100%",
                            }}
                          >
                            <div className="text-2xl mb-2">{x.level}</div>
                            <div className="text-sm ">{x.name}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </div>
  );
}

export default AboutTabsContent;
