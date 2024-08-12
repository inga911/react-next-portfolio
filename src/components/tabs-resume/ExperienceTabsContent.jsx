import { ScrollArea } from "../ui/scroll-area";
import { TabsContent } from "../ui/tabs";
import { experience } from "@/app/plugins/experience";

function ExperienceTabsContent() {
  return (
    <div>
      <TabsContent value="experience" className="w-full">
        <div className="mt-20">
          <h2 className="text-5xl uppercase mt-8 mb-4 text-sky-300">
            {experience.title}
          </h2>
          <p className="mb-4">{experience.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {experience.items.map((item, index) => (
                <li
                  key={index}
                  className="bg-[#37373f53] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <div className=" text-white/50">{item.duration}</div>
                  <div className="icon  text-xl">{item.position}</div>
                  <div div className=" text-white/50">
                    {item.company}
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
    </div>
  );
}

export default ExperienceTabsContent;
