import { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

export const CircularProgression = ({ item }) => {
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!item) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = item.level;
            const duration = 2500;
            const stepTime = duration / target;

            let start = 0;
            const interval = setInterval(() => {
              start += 1;
              setPercentage(start);
              if (start >= target) {
                clearInterval(interval);
              }
            }, stepTime);

            requestAnimationFrame(() => setPercentage(start));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [item]);

  return (
    <div ref={containerRef} className="relative">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        className="text-sm"
        styles={{
          path: {
            stroke: `rgb(125 211 252 )`,
          },
          text: {
            fill: "rgb(236 72 153)",
            fontSize: "16px",
          },
          trail: {
            stroke: "#4e5253",
          },
        }}
      />
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {item.name}
      </div>
    </div>
  );
};
