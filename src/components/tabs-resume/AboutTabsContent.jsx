import { CircularProgression } from "../CircularProgression";
import { TabsContent } from "../ui/tabs";
import { about } from "@/app/plugins/about";
import "react-circular-progressbar/dist/styles.css";

function AboutTabsContent() {
  return (
    <div>
      <TabsContent value="about" className="w-full">
        <div className="mt-20">
          <h2 className="text-5xl uppercase mt-8 mb-4 text-sky-300 lg:text-start">
            {about.title}
          </h2>
          <p className="mb-4">{about.description}</p>

          <div className="flex">
            <div className="flex  justify-between">
              <div className="flex justify-between lg:flex-row flex-col gap-5">
                {about.items.map((x, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center w-36"
                    >
                      <div>
                        <CircularProgression
                          item={x}
                          index={index}
                          name={x.name}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </div>
  );
}

export default AboutTabsContent;
