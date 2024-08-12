import { ScrollArea } from "../ui/scroll-area";
import { TabsContent } from "../ui/tabs";
import { education } from "@/app/plugins/education";

function EducationTabsContent() {
  return (
    <div>
      <TabsContent value="education" className="w-full">
        <div className="mt-20">
          <h2 className="text-5xl uppercase mt-8 mb-4 text-sky-300">
            {education.title}
          </h2>
          <p className="mb-4">{education.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] text-gray-300">
              {education.items.map((item, index) => (
                <li
                  key={index}
                  className="list-item bg-[#37373f53] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative"
                >
                  <div className="icon absolute text-7xl text-[#c6c6d22d] top-0 right-0">
                    {item.icon}
                  </div>
                  <div className=" text-white/50">{item.duration}</div>
                  <div className="icon  text-xl">{item.degree}</div>
                  <div className=" text-white/70">{item.institution}</div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
    </div>
  );
}

export default EducationTabsContent;
