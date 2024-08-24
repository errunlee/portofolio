import React from "react";
import Marquee from "react-fast-marquee";

const LangsAndTools = () => {
  const skills = [
    {
      src: "./images/skills/html5-original.svg",
      title: "HTML5",
      alt: "HTML",
      label: "HTML5",
    },
    {
      src: "./images/skills/css3-original.svg",
      title: "CSS3",
      alt: "CSS",
      label: "CSS3",
    },
    {
      src: "./images/skills/javascript-original.svg",
      title: "JavaScript",
      alt: "JavaScript",
      label: "JavaScript",
    },
    {
      src: "./images/skills/react-original.svg",
      title: "React",
      alt: "React",
      label: "React",
    },
    {
      src: "./images/skills/nodejs-plain.svg",
      title: "NodeJS",
      alt: "NodeJS",
      label: "NodeJS",
    },
    {
      src: "./images/skills/git-original.svg",
      title: "Git",
      alt: "Git",
      label: "Git",
    },
    {
      src: "./images/skills/Bootstrap_logo.svg.png",
      title: "Bootstrap",
      alt: "Bootstrap",
      label: "Bootstrap",
    },
    {
      src: "./images/skills/Touchicon-180.png",
      title: "Firebase",
      alt: "Firebase",
      label: "Firebase",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full py-12 mt-64 ">
      <section className="langs-and-tools text-center max-w-[100%]">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold  mb-6">
            Languages and Tools I Work With
          </h2>
          <hr className="border-gray-300 w-2/3 mx-auto" />
        </div>

        <Marquee gradient={false} speed={140} pauseOnHover={true}>
          <div className="flex justify-around items-center w-full px-4 md:px-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-4 md:mx-8"
              >
                <img
                  src={skill.src}
                  title={skill.title}
                  alt={skill.alt}
                  className="w-16 h-16 md:w-24 md:h-24 mb-2 transition-transform duration-300 hover:scale-110"
                />
                <span className="text-sm md:text-lg font-semibold text-gray-700">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default LangsAndTools;
