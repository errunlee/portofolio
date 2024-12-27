import React, { useState } from "react";
import { motion } from "framer-motion";
import { applications } from "./Porject_data";
const Projects = () => {
  const [isParentAnimated, setIsParentAnimated] = useState(false);
  let duration = 0;
  return (
    <>
      <motion.section class="light overflow-hidden">
        <h2>👩🏽‍🚀 Projects</h2>

        <p>
          These are some applications and projects that I've worked on. I've
          mainly used react for frontend and firebase for backend in these
          projects. Feel free to check them out below.
          <br />
          <span className="mt-5">
            To view all my other projects, please visit my github by clicking{" "}
            <a
              className="underline text-blue-300 hover:text-blue-100"
              href="https://github.com/errunlee"
              target="_blank"
            >
              here.
            </a>
          </span>
        </p>

        <div class="project_cards">
          {applications.map((app, ind) => {
            const { imageSrc, title, description, link } = app;
            return (
              <motion.div
                key={ind}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: (duration += 0.2) }}
                viewport={{ once: true }}
                class="box reveal"
              >
                <img src={imageSrc} alt="note image" />
                <h2>{title}</h2>
                <p>{description}</p>
                <a
                  className="px-3 py-2 border mt-5 hover:text-black hover:bg-white"
                  href={link}
                  target="_blank"
                >
                  Check this out
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
