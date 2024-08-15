import { ScrollArea } from "../ui/scroll-area";
import { TabsContent } from "../ui/tabs";
import { skills } from "@/app/plugins/skills";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function SkillsTabsContent() {
  return (
    <div>
      <TabsContent value="skills" className="w-full">
        <div className="mt-20">
          <h2 className="text-5xl uppercase mt-8 mb-4 text-sky-300">
            {skills.title}
          </h2>
          <p className="mb-4">{skills.description}</p>

          <ScrollArea className="h-[400px] w-full sm:w-[450px] md:w-[650px]">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
              {skills.skillsList.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-slate-700/25 hover:text-sky-400 rounded-xl flex justify-center items-center group">
                        <div className="text-5xl transition-all duration-300">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div>{skill.name}</div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
    </div>
  );
}

export default SkillsTabsContent;
