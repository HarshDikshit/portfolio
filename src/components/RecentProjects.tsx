import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { Server } from "lucide-react";

const RecentProjects = () => {
  return (
    <section
      id="projects"
      className="min-h-[60vh] w-full  text-zinc-100 p-6 md:p-10"
    >
      <header className="mb-8 md:mb-12 max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-700/40 bg-zinc-900/60 px-3 py-1 text-xs uppercase tracking-wider">
          <Server className="h-3.5 w-3.5" />
          <span>Projects</span>
        </div>
        <h1 className="mt-3 text-2xl md:text-4xl font-bold leading-tight">
          A small selection of{" "}
          <span className="text-purple-300">recent projects</span>
        </h1>
        <p className="mt-2 text-sm md:text-base text-justify text-zinc-400">
          I have built a diverse range of projects that highlight my skills in
          both hardware and software development. These projects not only
          strengthened my technical expertise but also enhanced my ability to
          design systems that merge creativity, functionality, and real-world
          application.
        </p>
      </header>

      <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 lg:gap-y-8  ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[28rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[500px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[55vh] h-[30vh]  lg:mb-10 ">
                <div className="relative w-full  h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute -bottom-10 left-0 w-full h-full px-10 rounded-t-4xl
                            overflow-hidden shadow-2xl rotate-3 
                            object-cover transition-transform duration-300 ease-in-out 
                            hover:rotate-6 hover:scale-105"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center ">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-200">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
