"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const timelineData = [
  {
    year: "2023 - 2027",
    title: "B.Tech in Electronics & Communication",
    institution: "Dr. A.P.J. Abdul Kalam Technical University, UP",
    description:
      "Pursuing Bachelor's degree in Electronics and Communication.",
    logo: "/logos/aktu.png",
  },
  {
    year: "2023",
    title: "12th Grade (CBSE)",
    institution: "CBSE Board",
    description: "Achieved 86% in the Science stream.",
    logo: "/logos/cbse.png",
    badge: "86%",
  },
  {
    year: "2021",
    title: "10th Grade (CBSE)",
    institution: "CBSE Board",
    description: "Scored 95% overall.",
    logo: "/logos/cbse.png",
    badge: "95%",
  },
];

// Small reusable 3D card wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor X inside card
    const y = e.clientY - rect.top; // cursor Y inside card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // tilt strength
    const rotateY = ((x - centerX) / centerX) * -10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const reset = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="transition-transform duration-300"
    >
      {children}
    </motion.div>
  );
}

export default function AcademicTimeline() {
  return (
    <section id="academics" className="pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          My Path of <span className="text-purple-400">Learning</span> & <span className="text-purple-400">Academics</span> 📚✨
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/80 rounded-full -translate-x-1/2"></div>

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`mb-12 flex flex-col lg:flex-row ${
                  isLeft ? "lg:justify-start" : "lg:justify-end"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative lg:w-[45%] ${
                    isLeft ? "lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  {/* Dot */}
                  <span
                    className="hidden lg:block absolute top-6 w-4 h-4 bg-purple-500 rounded-full ring-4 ring-[#0d0b14]"
                    style={{
                      left: isLeft ? "100%" : undefined,
                      right: isLeft ? undefined : "100%",
                    }}
                  ></span>

                  {/* 3D Card */}
                  <TiltCard>
                    <div className="relative bg-[#161221] border border-purple-800 rounded-xl p-6 shadow-lg hover:shadow-purple-600/50 transition-shadow duration-300">
                      {/* Badge (for % achievements) */}
                      {item.badge && (
                        <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {item.badge}
                        </span>
                      )}

                      <div className="flex items-center gap-3 mb-3">
                        <Image
                          src={item.logo}
                          alt={`${item.institution} logo`}
                          width={40}
                          height={40}
                          className="rounded-full border border-purple-700 p-1 bg-white"
                        />
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <time className="block mb-2 text-sm font-medium text-purple-400">
                        {item.year}
                      </time>
                      <p className="text-sm text-gray-300 font-medium mb-2">
                        {item.institution}
                      </p>
                      <p className="text-gray-400 text-base">
                        {item.description}
                      </p>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
