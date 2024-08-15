import { ScrollArea } from "../ui/scroll-area";
import { TabsContent } from "../ui/tabs";
import { experience } from "@/app/plugins/experience";
import { RiMore2Fill } from "react-icons/ri";

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
                  className="bg-[#37373f53] h-[184px] py-5 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 group relative"
                >
                  <div
                    className="text-pink-600 text-2xl absolute right-0 top-5 hover:cursor-pointer"
                    onClick={() =>
                      document.getElementById(`my_modal_${index}`).showModal()
                    }
                  >
                    <RiMore2Fill />
                  </div>
                  <div className="text-white/50">{item.duration}</div>
                  <div className="icon text-xl">{item.position}</div>
                  <div className="text-white/50">{item.company}</div>

                  <dialog id={`my_modal_${index}`} className="modal">
                    <div className="modal-box bg-[#1c1c20] border-2 border-pink-600">
                      <form method="dialog">
                        <button className="btn text-xl btn-circle btn-ghost absolute right-2 top-2 text-pink-700">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg mb-5">
                        Mainly tasks as {item.position}:
                      </h3>

                      <ul class="list-disc">
                        {item.aboutPosition.map((text, idx) => (
                          <li key={idx}>
                            <div className="pb-2">{text}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
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
